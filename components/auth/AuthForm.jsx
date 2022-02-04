import { useState, useContext } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import useInput from "../../hooks/useInput";
import classes from "./AuthForm.module.css";
import Image from "next/image";
import BugTracker from "../../public/BugTracker.png";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/Notification";

const emailHasAt = (value) => value.includes("@");

const isNotEmpty = (value) => value.trim() !== "";
async function createUser(email, password) {
  notificationCtx.showNotification({
    title: "Adding User",
    message: "User Is Being Added",
    status: "pending",
  });
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  notificationCtx.showNotification({
    title: "User Created",
    message: "Succesfully created user",
    status: "success",
  });
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function AuthForm() {
  const [exUser, setExUser] = useState("dani@gmail.com");
  const [exPassword, setExPassword] = useState("daniel12345");
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailHasAt);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const emailClasses = emailInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const passwordClasses = passwordInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  async function addUserHandler(e) {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (result.ok) {
        router.replace("/");
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    resetEmailInput();
    resetPasswordInput();
  }

  async function exisitngUser(e) {
    e.preventDefault();
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: exUser,
        password: exPassword,
      });

      if (result.ok) {
        // set some auth state
        router.replace("/");
      }
    }
  }

  return (
    <section className={classes.authPage}>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <div className={classes.imageContainer}>
        <div className={classes.imageFit}>
          <Image
            src={BugTracker}
            width={400}
            height={400}
            alt="bug tracker"
            objectFit={"cover"}
          />
        </div>
      </div>

      <div className={classes.contentContainer}>
        <div className={classes.formContainer}>
          <h2>{isLogin ? "Login" : "Sign Up!"}</h2>
          <form onSubmit={addUserHandler}>
            <div className={emailClasses}>
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                required
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailInputHasError && (
                <p className={classes.textError}>Invalid Email</p>
              )}
            </div>
            <div className={passwordClasses}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordInputHasError && (
                <p className={classes.textError}>Invalid Password</p>
              )}
            </div>

            <div>
              <button className={classes.buttom}>
                {isLogin ? "Login" : "Create Account"}
              </button>
              <button
                className={classes.buttom}
                type="button"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
          <button onClick={exisitngUser} className={classes.user}>
            Login (exisitng user)
          </button>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;

import useInput from "../../hooks/useInput";
import classes from "./ChangePassword.module.css";
const isNotEmpty = (value) => value.trim() !== "";

async function changePassword(passwordData) {
  const response = await fetch("/api/user/changePassword", {
    method: "PATCH",
    body: JSON.stringify(passwordData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  } else {
  }

  return data;
}

function ChangePasswordForm(props) {
  const {
    value: enteredOldPassword,
    isValid: oldPasswordIsValid,
    hasError: oldPasswordInputHasError,
    valueChangeHandler: oldPasswordChangeHandler,
    inputBlurHandler: oldPasswordBlurHandler,
    reset: resetOldPasswordInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredNewPassword,
    isValid: newPasswordIsValid,
    hasError: newPasswordInputHasError,
    valueChangeHandler: newPasswordChangeHandler,
    inputBlurHandler: newPasswordBlurHandler,
    reset: resetNewPasswordInput,
  } = useInput(isNotEmpty);

  const formIsValid = false;

  if (oldPasswordIsValid && newPasswordIsValid) {
    formIsValid = true;
  }
  const oldPasswordClasses = oldPasswordInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const newPasswordClasses = newPasswordInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  async function submitHandler(e) {
    e.preventDefault();

    const changedPasswordData = {
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword

    }

    const send = await changePassword(changedPasswordData)
    
    console.log(send)
  }

  return (
    <section className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={oldPasswordClasses}>
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="text"
            id="oldPassword"
            value={enteredOldPassword}
            onChange={oldPasswordChangeHandler}
            onBlur={oldPasswordBlurHandler}
          />
          {oldPasswordInputHasError && (
            <p className={classes.textError}>Enter old password correctly!</p>
          )}
        </div>
        <div className={newPasswordClasses}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="text"
            id="newPassword"
            value={enteredNewPassword}
            onChange={newPasswordChangeHandler}
            onBlur={newPasswordBlurHandler}
          />
          {newPasswordInputHasError && (
            <p className={classes.textError}>Enter new password correctly!</p>
          )}
        </div>
        <div>
          <button className={classes.buttom} type="submit">Change Password</button>
        </div>
      </form>
    </section>
  );
}

export default ChangePasswordForm;

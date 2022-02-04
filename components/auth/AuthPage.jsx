import classes from "./AuthPage.module.css";
import Image from "next/image";
import BugTracker from "../../public/BugTracker.png";

function AuthPage() {
  return (
    <section className={classes.authPage}>
      <div className={classes.imageBox}>
        <Image
          src={BugTracker}
          width={500}
          height={500}
          alt="bug tracker"
          objectFit={"cover"}
        />
      </div>
      <div className={classes.contentBox}>
      </div>
    </section>
  );
}

export default AuthPage;

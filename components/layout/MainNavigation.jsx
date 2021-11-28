import { useState } from "react";
import classes from "./MainNavigation.module.css";

import Link from "next/link";

function Dashboard() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>The Track Bugger</div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link href="/">Dashboard</Link>
          </li>
          <li className={classes.li}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={classes.li}>
            <Link href="/tickets">Tickets</Link>
          </li>
          <li className={classes.li}>
            <Link href="/comments">Comments</Link>
          </li>
          <li className={classes.li}>
            <Link href="/settings">Settings</Link>
          </li>
          <li className={classes.li}>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Dashboard;

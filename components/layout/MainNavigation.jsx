import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

function Dashboard() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={classes.navigation}>
      <div className={classes.header}>The Bug Tracker</div>
      <nav>
        <ul>
          <li className={router.pathname == "/" ? classes.active : ""}>
            <div className={classes.icon}>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <Link href="/">Dashboard</Link>
          </li>
          <li
            className={
              router.pathname == "/projects"
                ? classes.active
                : "" || router.pathname == "/projects/[projectId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={faProjectDiagram} />
            </div>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/tickets"
                ? classes.active
                : "" || router.pathname == "/tickets/[ticketId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <Link href="/tickets">Tickets</Link>
          </li>
          <li
            className={
              router.pathname == "/comments"
                ? classes.active
                : "" || router.pathname == "/comments/[commentId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={faComments} />
            </div>
            <Link href="/comments">Comments</Link>
          </li>
          <li
            className={
              router.pathname == "/contacts"
                ? classes.active
                : "" || router.pathname == "/contacts/[contactId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon className={classes.icon} icon={faAddressBook} />
            </div>
            <Link href="/contacts">Personel</Link>
          </li>
          <li
            className={
              router.pathname == "/settings"
                ? classes.active
                : "" || router.pathname == "/settings/[settingId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon icon={faCog} />
            </div>
            <Link href="/settings">Settings</Link>
          </li>

          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
}

export default Dashboard;

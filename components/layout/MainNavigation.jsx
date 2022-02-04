import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faTicketAlt,
  faComments,
  faCog,
  faAddressBook,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

function MainNavigation() {
  const router = useRouter();
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }
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
              router.pathname == "/personnel"
                ? classes.active
                : "" || router.pathname == "/personnel/[personnelId]"
                ? classes.active
                : ""
            }
          >
            <div className={classes.icon}>
              <FontAwesomeIcon className={classes.icon} icon={faAddressBook} />
            </div>
            <Link href="/personnel">Personel</Link>
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
          {session && !loading && (
            <li>
              <div className={classes.icon}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
              <a onClick={logoutHandler}>
                <Link href="/auth">Logout</Link>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

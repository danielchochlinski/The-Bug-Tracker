import MainNavigation from "./MainNavigation";
import Notification from "../ui/Notification";
import Topbar from "./Topbar";
import { Fragment, useContext } from "react";
import NotificationContext from "../../store/notification-context";

const Layout = (props) => {
  const notificatioCtx = useContext(NotificationContext);
  const activeNotification = notificatioCtx.notification;
  return (
    <Fragment>
      <MainNavigation />
      <Topbar />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;

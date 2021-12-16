import { Fragment } from "react";

import IconList from "../components/dashboard/IconList";
import RecentAddList from "../components/dashboard/RecentAddList";
import Calendar from "../components/workNprogres/MyCalendar"


function Main() {
  return (
    <Fragment>
      <IconList />
    <RecentAddList />
    <Calendar />
    </Fragment>
  );
}

export default Main;

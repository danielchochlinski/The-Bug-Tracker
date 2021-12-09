import { Fragment } from "react";

import IconList from "../components/dashboard/IconList";
import RecentAddList from "../components/dashboard/RecentAddList";
import ChartsList from "../components/dashboard/ChartsList"

function Main() {
  return (
    <Fragment>
      <IconList />
    <RecentAddList />
    <ChartsList />
    </Fragment>
  );
}

export default Main;

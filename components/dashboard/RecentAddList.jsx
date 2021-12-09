import Box from "../ui/Box";
import Card from "../ui/Card";
import RecentTickets from "./RecentTickets";
import RecentProjects from "./RecentProjects"

import classes from "./RecentAddList.module.css";

function RecentAddList() {
  return (
    <Box>
      <div className={classes.gridBox}>
        <Card>
          <RecentTickets />
        </Card>
        <Card>
          <RecentProjects />
        </Card>
      </div>
    </Box>
  );
}

export default RecentAddList;

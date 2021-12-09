import Card from "../ui/Card"
import IconList from "./IconList"

import classes from "./Dashboard.module.css"
function Dashboard () {
    return (
      <div className={classes.div}>
          <IconList></IconList>
          
      </div>
    );
}

export default Dashboard
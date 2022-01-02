import Box from "./Box";
import PieChartTickets from "../tickets/PieChartTickets";
import classes from "./ChartsList.module.css";

function ChartsList(props) {
  return (
    <Box>
      <div className={classes.chartList}>{props.children} </div>
    </Box>
  );
}

export default ChartsList;

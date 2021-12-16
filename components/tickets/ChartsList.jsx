import { useEffect, useState } from "react";
import Box from "../ui/Box";
import PieChartTickets from "./PieChartTickets";
import classes from "./ChartsList.module.css";
import Card from "../ui/Card";

function ChartsList() {
  return (
    <Box>
      <div className={classes.chartList}>
        <PieChartTickets />
      </div>
    </Box>
  );
}

export default ChartsList;

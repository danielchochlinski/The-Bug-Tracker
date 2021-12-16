import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";


 const appointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
  }]

const currentDate = "2018-07-17";

export default () => (
  <Paper>
    <Scheduler data={appointments}>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    
    </Scheduler>
  </Paper>
);

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Box from "../ui/Box";
import Card from "../ui/Card";

const locales = { "en-GB": require("date-fns/locale/en-GB") };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function MyCalendar(props) {
 
  return (
    <Box>
      <Card>
        <div style={{ textAlign: "center", padding: "10px", marginTop: "100px", pading: "10px",  fontWeight: "bold"}}>
          Projects && Tickets coming up
        </div>
        <Calendar
          popup
          localizer={localizer}
          events={props.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: 900, margin: "30px" }}
        />
      </Card>
    </Box>
  );
}

export default MyCalendar;

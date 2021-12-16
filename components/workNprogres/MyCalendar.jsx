import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Box from "../ui/Box";
import Card from "../ui/Card";
import useCalendar from "../../hooks/useCalendar"

const locales = { "en-GB": require("date-fns/locale/en-GB") };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "dummy",
    start: new Date(2021, 11, 18),
    end: new Date(2021, 11, 18),
  },
  {
    title: "dummy",
    start: new Date(2021, 11, 18),
    end: new Date(2021, 11, 23),
  },
];

function MyCalendar() {

 


  const [ticketEvents, setTicketEvents] = useState([])
  useEffect(() => {
    async function getTickets() {
      const response = await fetch("/api/fetchTickets", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tickets = await response.json();            
      const mappedResponse = tickets.map(ticket => ({title: ticket.title, start: ticket.date, end: ticket.date }))
      setTicketEvents(mappedResponse);
    }
    getTickets();
  }, []);

console.log(ticketEvents)

  return (
    <Box>
      <Card>
        <div style={{textAlign: 'center', padding: '10px'}}>Projects && Tickets coming up</div>
        <Calendar
        popup
          localizer={localizer}
          events={ticketEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: 900, margin: "30px" }}
        />
      </Card>
    </Box>
  );
}

export default MyCalendar;

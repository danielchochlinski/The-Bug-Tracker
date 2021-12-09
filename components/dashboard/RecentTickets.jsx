import { useEffect, useState } from "react";
import TicketItemDashboard from "./TicketItemDashboard";
import classes from "./RecentTickets.module.css";

function RecentTickets() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getTickets() {
      const response = await fetch("/api/fetchTickets");
      const tickets = await response.json();
      setTickets(tickets);
      console.log(tickets);
    }

    getTickets();
  }, []);
  return (
    <div className={classes.recentTickets}>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Importance</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <TicketItemDashboard
              title={ticket.title}
              import={ticket.importance}
              status={ticket.status}
              date={ticket.date}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTickets;

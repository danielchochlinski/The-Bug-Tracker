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
    }

    getTickets();
  }, []);

  return (
    <div className={classes.recentTickets}>
      <div className={classes.heading}>Recent Tickets</div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Importance</td>
            <td>Status</td>
            <td>Target Date</td>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <TicketItemDashboard
              key={ticket._id}
              title={ticket.title}
              importance={ticket.importance}
              status={ticket.status}
              targetDate={ticket.targetDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTickets;

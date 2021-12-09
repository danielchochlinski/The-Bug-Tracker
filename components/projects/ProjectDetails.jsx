import { useEffect, useState } from "react";
import classes from "./ProjectDetails.module.css";
import Card from "../ui/Card";
import TicketForProjectDetail from "./ProjectDetails/TicketForProjectDetail";

function ProjectDetails(props) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getTickets() {
      const response = await fetch("/api/fetchTickets", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tickets = await response.json();
      setTickets(tickets);
    }
    getTickets();
  }, []);

  const filteredTickets = tickets.filter(
    (ticket) => ticket.projectId === props.title
  );

  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.header}>
          <h2>Details for project</h2>
          <h3>{props.title}</h3>
          <div>{props.description}</div>
        </div>
        <div className={classes.grid}>
          <div className={classes.ticketList}>
            <h1>Ticket list for this project</h1>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Status</td>
                  <td>Importance</td>
                  <td>Type</td>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <TicketForProjectDetail
                    id={ticket.id}
                    title={ticket.title}
                    projectId={ticket.projectId}
                    personel={ticket.personel}
                    description={ticket.description}
                    status={ticket.status}
                    importance={ticket.importance}
                    type={ticket.type}
                    date={ticket.date}
                    key={ticket.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className={classes.assignedPersonel}>
            <h1>Assigned Personel</h1>
            <table>
              <thead>
                <tr>
                  <td>Developer</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectDetails;

import { useEffect, useState, Fragment } from "react";

import classes from "./ProjectDetails.module.css";

import Card from "../../ui/Card";
import Box from "../../ui/Box"
import TicketForProjectDetail from "./TicketForProjectDetail";
import ProjectDescription from "./ProjectDescription";



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
    <Fragment>
      <Box>
        <ProjectDescription
          title={props.title}
          description={props.description}
          status={props.status}
          importance={props.importance}
          date={props.date}
          targetDate={props.targetDate}
        />
      </Box>
      <Box>
        <Card>
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
      </Box>
    </Fragment>
  );
}

export default ProjectDetails;

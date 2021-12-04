import { useEffect, useState } from "react";
import classes from "./ProjectDetails.module.css";
import Card from "../ui/Card";

function ProjectDetails(props) {

  const [tickets, setTickets] = useState([])
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

  if(props.title == tickets.title){
    console.log("yes")
  }

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
          </div>
          <div className={classes.assignedPersonel}>
            <h1>Assigned Personel</h1>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProjectDetails;

import classes from "./ProjectDetails.module.css";
import Card from "../ui/Card";
function ProjectDetails(props) {

  async function getTickets(){
    
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

import Card from "../../ui/Card";
import classes from "./TicketDescription.module.css";
function TicketDescription(props) {
  return (
    <div>
      <Card>
        <div className={classes.header}>
          <h2>Details for ticket</h2>
          <h3>{props.title}</h3>
          <div className={classes.ticketDetails}>
            <table>
              <thead>
                <tr>
                  <td>Project ID</td>
                  <td>Developer</td>
                  <td>Ticket Priority</td>
                  <td>Ticket Status</td>
                  <td>Ticket Type</td>
                  <td>Date</td>
                  <td>TargetDate</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.projectId}</td>
                  <td>{props.personel}</td>
                  <td>{props.importance}</td>
                  <td>{props.status}</td>
                  <td>{props.type}</td>
                  <td>{props.date}</td>
                  <td>{props.targetDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.ticketDetails}>
            <table>
              <thead>
                <tr>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default TicketDescription;

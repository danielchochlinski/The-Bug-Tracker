import classes from "./ProjectDescription.module.css";
import Card from "../../ui/Card";
function ProjectDescription(props) {
  return (
    <Card>
      <div className={classes.header}>
        <h2>Details for project</h2>
        <h3>{props.title}</h3>
        <div className={classes.projectDetials}>
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Status</td>
                <td>Importance</td>
                <td>Date</td>
                <td>TargetDate</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.title}</td>
                <td>{props.status}</td>
                <td>{props.importance}</td>
                <td>{props.date}</td>
                <td>{props.targetDate}</td>
              </tr>
            </tbody>
          </table>
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
  );
}

export default ProjectDescription;

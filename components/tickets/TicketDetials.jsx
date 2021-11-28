import classes from "./TicketDetails.module.css"
function TicketDetails(props) {

  
  return (
    <div className={classes.div}>
      <div>
        <div>
          <h2>Details for title: {props.title}</h2>
          <h2>work on it later</h2>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;

import Card from "./Card";
import classes from "./IconCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function IconCard(props) {
  return (
    <Card>
      <div className={classes.iconCard}>
        <div className={classes.infoBox}>
          <div>Total {props.name}</div>
          <div className={classes.iconNumer}>{props.totalLength}</div>
        </div>
        <div className={classes.iconBox}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
    </Card>
  );
}

export default IconCard;

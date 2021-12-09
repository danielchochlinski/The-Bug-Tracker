import Card from "../ui/Card"
import classes from "./IconCard.module.css"
function IconCard () {
    return (
      <Card>
        <div className={classes.iconCard}>
          <div className={classes.infoBox}>
            <div> (number1)</div>
            <div>Total Projects</div>
          </div>
          <div className={classes.iconBox}>
            <i> Icon</i>
          </div>
        </div>
      </Card>
    );
}

export default IconCard
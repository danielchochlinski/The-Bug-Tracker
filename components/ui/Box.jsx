import classes from "./Box.module.css"

function Box (props) {
return (
    <div className={classes.box}>{props.children}</div>
)
}

export default Box
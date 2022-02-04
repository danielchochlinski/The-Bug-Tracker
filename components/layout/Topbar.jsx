import classes from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={classes.topbar}>
      <div className={classes.toggle}></div>
      <div className="search">
        <label>{/* <input type="text" placeholder="Search" /> */}</label>
      </div>
      <div className="user">
        <img alt="" />
      </div>
    </div>
  );
}

export default Topbar;

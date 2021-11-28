import classes from "./Topbar.module.css"

function Topbar () {
    return  <div className={classes.topbar}>
        <div className={classes.toggle}>Toggle</div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </label>
        </div>
        <div className="user">
          <img alt="" />
        </div>
      </div>

}

export default Topbar
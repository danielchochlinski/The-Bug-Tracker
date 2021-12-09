import classes from "./IconList.module.css";
import Box from "../ui/Box";
import IconCard from "./IconCard";
function IconList() {
  return (
    <Box>
      <div className={classes.iconList}>
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </div>
    </Box>
  );
}

export default IconList;

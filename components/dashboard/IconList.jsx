import classes from "./IconList.module.css";
import Box from "../ui/Box";
import IconCard from "../ui/IconCard"

import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faProjectAlt } from "@fortawesome/free-solid-svg-icons";

function IconList(props) {
  let ticketsLength = props.tickets.length;
  let ticketName = "Tickets";

  let projectsLength = props.projects.length
  let projectName = "Projects"
  return (
    <Box>
      <div className={classes.iconList}>
        <IconCard totalLength={ticketsLength} name={ticketName} icon={faTicketAlt} />
        <IconCard totalLength={projectsLength} name={projectName} icon={faProjectAlt} />
        <IconCard />
        <IconCard />
      </div>
    </Box>
  );
}

export default IconList;

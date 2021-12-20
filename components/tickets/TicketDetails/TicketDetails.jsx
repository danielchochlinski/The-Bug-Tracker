import { useState, useEffect, Fragment } from "react";

import Box from "../../ui/Box";
import TicketDescription from "./TicketDescription";
import CommentList from "../../tickets/TicketDetails/comments/CommentsList";

function TicketDetails(props) {

  return (
    <Fragment>
      <Box>
        <TicketDescription
        
          title={props.title}
          projectId={props.projectId}
          description={props.description}
          personel={props.personel}
          status={props.status}
          importance={props.importance}
          type={props.type}
          date={props.date}
          targetDate={props.targetDate}
          key={props._id}
        />
      </Box>
      <Box>
        <CommentList title={props.title}/>
      </Box>
    </Fragment>
  );
}
export default TicketDetails;

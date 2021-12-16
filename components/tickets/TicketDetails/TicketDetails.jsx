import { useState, useEffect, Fragment } from "react";

import Box from "../../ui/Box";
import TicketDescription from "./TicketDescription";
import CommentList from "../../Comments/CommentsList";

function TicketDetails(props) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getTickets() {
      const response = await fetch("/api/fetchTickets", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const tickets = await response.json();
      setTickets(tickets);
    }
    getTickets();
  }, []);

  const filteredTicket = tickets.filter(
    (ticket) => ticket.title === props.title
  );

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
        <CommentList />
      </Box>
    </Fragment>
  );
}
export default TicketDetails;

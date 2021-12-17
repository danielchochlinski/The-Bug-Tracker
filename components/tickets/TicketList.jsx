import { useState, Fragment, useEffect } from "react";

import classes from "./TicketList.module.css";
import Box from "../ui/Box";
import Card from "../ui/Card";
import TicketItem from "./TicketItem";

import AddTicketForm from "./AddTicketForm";

function TicketList(props) {
  const [showAddTicket, setshowAddTicket] = useState(false);

  const showAddTicketHandler = () => {
    setshowAddTicket(true);
  };
  const hideAddTicketHandler = () => {
    setshowAddTicket(false);
  };

  async function addTicketHandler(enteredTicketData) {
    const response = await fetch("/api/postTicket", {
      method: "POST",
      body: JSON.stringify(enteredTicketData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setshowAddTicket(false);
  }

  return (
    <Fragment>
      <Box>
        <Card>
          <div className={classes.ticketsList}>
            <div className={classes.header}>Tickets List</div>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Project Name</td>
                  <td>Personel</td>
                  <td>Status</td>
                  <td>Ticket Priority</td>
                  <td>Type</td>
                  <td>Date</td>
                  <td>Target Date</td>
                </tr>
              </thead>
              <tbody>
                {props.tickets.map((ticket) => (
                  <TicketItem
                    id={ticket.id}
                    title={ticket.title}
                    projectId={ticket.projectId}
                    personel={ticket.personel}
                    description={ticket.description}
                    status={ticket.status}
                    importance={ticket.importance}
                    type={ticket.type}
                    date={ticket.date}
                    targetDate={ticket.targetDate}
                    key={ticket.id}
                  />
                ))}
              </tbody>
            </table>
            <button onClick={showAddTicketHandler}>Add Ticket</button>
          </div>
        </Card>
      </Box>
      {showAddTicket && (
        <AddTicketForm
          onAddTicket={addTicketHandler}
          onClose={hideAddTicketHandler}
        />
      )}
    </Fragment>
  );
}

export default TicketList;

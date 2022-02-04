import { useState, Fragment, useEffec, useContext } from "react";
import NotificationContext from "../../store/notification-context";

import classes from "./TicketList.module.css";
import Box from "../ui/Box";
import Card from "../ui/Card";
import TicketItem from "./TicketItem";

import AddTicketForm from "./AddTicketForm";

function TicketList(props) {
  console.log()
  const [showAddTicket, setShowAddTicket] = useState(false);
  const notificationCtx = useContext(NotificationContext);
  const showAddTicketHandler = () => {
    setShowAddTicket(true);
  };
  const hideAddTicketHandler = () => {
    setShowAddTicket(false);
  };

  async function addTicketHandler(enteredTicketData) {
    notificationCtx.showNotification({
      title: "Adding Ticket",
      message: "Ticket Is Being Added",
      status: "pending",
    });

    const response = await fetch("/api/postTicket", {
      method: "POST",
      body: JSON.stringify(enteredTicketData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Ticket Added",
          message: "Ticket Has Been Added",
          status: "success",
        });
      });

    setShowAddTicket(false);
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
                    id={ticket._id}
                    title={ticket.title}
                    projectId={ticket.projectId}
                    personel={ticket.personel}
                    description={ticket.description}
                    status={ticket.status}
                    importance={ticket.importance}
                    type={ticket.type}
                    date={ticket.date}
                    targetDate={ticket.targetDate}
                    key={ticket._id}
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

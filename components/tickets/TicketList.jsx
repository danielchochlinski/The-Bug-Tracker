import { useState, Fragment, useEffect } from "react";

import TicketItem from "./TicketItem";
import classes from "./TicketList.module.css";

import Card from "../ui/Card";
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
    const response = await fetch("/api/tickets", {
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
      <div className={classes.project__list}>
        <Card>
          <h1> Ticket List</h1>
          <table className={classes.table}>
            <thead>
              <tr>
                <td>Title</td>
                <td>Project Name</td>
                <td>Personoel</td>
                <td>Ticket Priority</td>
                <td>Status</td>
                <td>Type</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              {props.tickets.map((ticket) => (
                <TicketItem
                  id={ticket.id}
                  title={ticket.title}
                  description={ticket.description}
                  status={ticket.status}
                  importance={ticket.importance}
                  date={ticket.date}
                  dueDate={ticket.dueDate}
                  key={ticket.id}
                />
              ))}
            </tbody>
          </table>
          <button onClick={showAddTicketHandler}>add</button>
        </Card>
      </div>
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

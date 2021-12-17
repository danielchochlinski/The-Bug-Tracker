import { Fragment, useEffect, useState } from "react";
import Card from "../ui/Card";
import IconList from "./IconList";
import RecentAddList from "./RecentAddList";
import Calendar from "../workNprogres/MyCalendar";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchDataCalendar() {
      //Projects
      const responseProjects = await fetch("/api/fetchProjects");
      const projects = await responseProjects.json();
      setProjects(projects);

      let mappedProjects = projects.map((project) => ({
        title: project.title,
        start: project.targetDate,
        end: project.targetDate,
      }));
      //Tickets
      const responseTickets = await fetch("/api/fetchTickets");
      const tickets = await responseTickets.json();
      setTickets(tickets);

      let mappedTickets = tickets.map((ticket) => ({
        title: ticket.title,
        start: ticket.targetDate,
        end: ticket.targetDate,
      }));
      //Merge for Events
      let allEvents = [...mappedProjects, ...mappedTickets];
      setEvents(allEvents);
    }
    fetchDataCalendar();
  }, []);

  return (
    <Fragment>
      <IconList tickets={tickets} projects={projects} />
      <RecentAddList />
      <Calendar events={events} />
    </Fragment>
  );
}

export default Dashboard;

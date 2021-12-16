import { useState } from "react";

function useCalendar(data) {

  const [dataEvents, setDataEvents] = useState([]);

  useEffect(() => {

    async function getData() {
      const response = await fetch(data);
      const responseData = await response.json();
      const mappedResponse = responseData.map((ticket) => ({
        title: ticket.title,
        start: ticket.date,
        end: ticket.date,
      }));
      setDataEvents(mappedResponse);
    }
    getTickets();
  }, []);

  return {
    events: dataEvents
  };
}

export default useCalendar
;

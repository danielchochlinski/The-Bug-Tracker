import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function PieChart() {
  const [tickets, setTickets] = useState([]);

  async function getTickets() {
    let emp = [];
    const response = await fetch("/api/fetchTickets");
    const tickets = response.json();
    setTickets(tickets);

 }
 
  y


  useEffect(() => {
    getTickets();
  }, []);

  const data = {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        data: [1, 2, 3, 4, 15],
      },
    ],
  };

  return (
    <div style={{ width: "200px" }}>
      <Doughnut data={data} />
    </div>
  );
}

export default PieChart;

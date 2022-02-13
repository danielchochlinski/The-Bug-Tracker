import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Card from "../ui/Card";
import classes from "./BarChartProjects.module.css";
function BarChartProjects(props) {
  const [notStarted, setNotStarted] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [complete, setComplete] = useState([]);
  const [late, setLate] = useState([]);

  let array = {};

  useEffect(() => {
    //last 3projects by date

    let projects = props.projects;

    for (const status of projects) {
      array[status.status] = 1 + (array[status.status] || 0);
    }

    setNotStarted(array["Not Started"]);
    setInProgress(array["In Progress"]);
    setComplete(array.Complete);
    setLate(array.Late);
  }, );

  const labels = ["Not Started", "In Progress", "Completed", "Late"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: ["Status"],
        data: [notStarted, inProgress, complete, late],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",

          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card>
        <div className={classes.header}><h1>Projects by Status</h1></div>
      <Bar data={data} height={300} width={605} />
    </Card>
  );
}
export default BarChartProjects;

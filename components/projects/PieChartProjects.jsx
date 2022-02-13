import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import Card from "../ui/Card";
import classes from "./PieChartProjects.module.css";

function PieChartProjects(props) {
  const [low, setLow] = useState([]);
  const [medium, setMedium] = useState([]);
  const [high, setHigh] = useState([]);
  const [urgent, setUrgent] = useState([]);

  let array = {};

  useEffect(() => {
    //last 3projects by date
    let projects = props.projects;

    projects.push({ importance: "Low" });
    projects.push({ importance: "Medium" });
    projects.push({ importance: "High" });
    projects.push({ importance: "Urgent" });

    for (const importance of projects) {
      array[importance.importance] = 1 + (array[importance.importance] || 0);
    }
    projects.pop({ importance: "Low" });
    projects.pop({ importance: "Medium" });
    projects.pop({ importance: "High" });
    projects.pop({ importance: "Urgent" });

    let low = array.Low.toString() - "1";
    let medium = array.Medium.toString() - "1";
    let high = array.High.toString() - "1";
    let urgent = array.Urgent.toString() - "1";

    setLow(low);
    setMedium(medium);
    setHigh(high);
    setUrgent(urgent);
  }, );

  const data = {
    labels: ["Low", "Medium", "High", "Urgent"],
    datasets: [
      {
        label: "# of Votes",
        data: [low, medium, high, urgent],
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
      <div className={classes.chartBox}>
        <div className={classes.pieChart}>
          <div className={classes.header}>
            <h1>Projects Urgency Chart</h1>
          </div>
          <Pie data={data} />
        </div>
      </div>
    </Card>
  );
}

export default PieChartProjects;

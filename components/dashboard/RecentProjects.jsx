import { useEffect, useState } from "react";
import ProjectItemDashboard from "./ProjectItemDashboard";
import classes from "./RecentProjects.module.css";

function RecentProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    //last 3projects by date
    async function getProjects() {
      const response = await fetch("/api/fetchProjects");
      const projects = await response.json();
      setProjects(projects);
    }
    getProjects();
  }, []);
  return (
    <div className={classes.recentProjects}>
      <div className={classes.heading}>Recent Projects</div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Importance</td>
            <td>TargetDate</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectItemDashboard
              key={project._id}
              title={project.title}
              description={project.description}
              status={project.status}
              importance={project.importance}
              date={project.date}
              targetDate={project.targetDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentProjects;

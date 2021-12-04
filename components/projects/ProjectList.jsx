import { useState, Fragment } from "react";

import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

import Card from "../ui/Card";
import AddProjectForm from "./AddProjectForm";

function ProjectList(props) {
  const [showAddProject, setShowAddProject] = useState(false);

  const showAddProjectHandler = () => {
    setShowAddProject(true);
  };
  const hideAddProjectHandler = () => {
    setShowAddProject(false);
  };

  async function addProjectHandler(enteredProjectData) {
    const response = await fetch("/api/postPojects", {
      method: "POST",
      body: JSON.stringify(enteredProjectData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setShowAddProject(false);
  }

  return (
    <Fragment>
      <div className={classes.project__list}>
        <Card>
          <h1>Project List</h1>
          <table className={classes.table}>
            <thead>
              <tr className={classes.table__tr}>
                <td>Title</td>
                <td>Status</td>
                <td>Importance</td>
                <td>Date</td>
                <td>Target Date</td>
              </tr>
            </thead>
            <tbody>
              {props.projects.map((project) => (
                <ProjectItem
                  title={project.title}
                  description={project.description}
                  status={project.status}
                  importance={project.importance}
                  date={project.date}
                  targetDate={project.targetDate}
                  key={project.id}
                  id={project.id}
                />
              ))}
            </tbody>
          </table>
          <button onClick={showAddProjectHandler}>add</button>
        </Card>
      </div>
      {showAddProject && (
        <AddProjectForm
          onAddProject={addProjectHandler}
          onClose={hideAddProjectHandler}
        />
      )}
    </Fragment>
  );
}

export default ProjectList;

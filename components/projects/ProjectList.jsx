import { useState, Fragment, useContext, useEffect } from "react";
import NotificationContext from "../../store/notification-context";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";
import Button from "../ui/Button"
import Card from "../ui/Card";
import Box from "../ui/Box";
import AddProjectForm from "./AddProjectForm";

function ProjectList(props) {
  const [showAddProject, setShowAddProject] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  const showAddProjectHandler = () => {
    setShowAddProject(true);
  };
  const hideAddProjectHandler = () => {
    setShowAddProject(false);
  };

  async function addProjectHandler(enteredProjectData) {
    notificationCtx.showNotification({
      title: "Adding Project",
      message: "Project Is Being Added",
      status: "pending",
    });
    const response = await fetch("/api/postProject", {
      method: "POST",
      body: JSON.stringify(enteredProjectData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Project Added",
          message: "Project Has Been Added",
          status: "success",
        });
      });
    setShowAddProject(false);
  }
  return (
    <Fragment>
      <Box>
        <Card>
          <div className={classes.projectList}>
            <h1>Project List</h1>
            <table>
              <thead>
                <tr>
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
            <button onClick={showAddProjectHandler}>Add Project</button>
          </div>
        </Card>
      </Box>
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

import { useRef, useState, useEffect } from "react";

import Modal from "../ui/Modal";

function AddTicketForm(props) {
  const titleInputRef = useRef();
  const [projectId, setProjectId] = useState([]);
  const descriptionInputRef = useRef();
  const personelInputRef = useRef();
  const [statusValue, setStatusValue] = useState("");
  const [importanceValue, setImportanceValue] = useState("");
  const dateInputRef = useRef();

  const [typeValue, setTypeValue] = useState("");

  const projectIdHandler = (e) => {
    setProjectId(e.target.value);
  };
  const statusValueHandler = (e) => {
    setStatusValue(e.target.value);
  };

  const importanceValueHandler = (e) => {
    setImportanceValue(e.target.value);
  };

  const typeValueHandler = (e) => {
    setTypeValue(e.target.value);
  };

  const addTicketHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPersonel = personelInputRef.current.value;

    const ticketData = {
      title: enteredTitle,
      description: enteredDescription,
      personel: enteredPersonel,
      status: statusValue,
      importance: importanceValue,
      type: typeValue,
      date: enteredDate,
    };
    props.onAddTicket(ticketData);
  };

  useEffect(() => {
    async function getProjectsArray() {
      const response = await fetch("/api/fetchProjects", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const projects = await response.json();
      setProjectId(projects);
     
    }
    getProjectsArray();
  }, []);
        console.log(projectId);


  return (
    <Modal>
      <form onSubmit={addTicketHandler}>
        <h1>Add Ticket For Project</h1>
        <div>
          <label htmlFor="title">Ticket Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="projectId">Project ID</label>
          <select value={projectId} onChange={projectIdHandler}>
            {projectId.map((project) => (
              <option value={project.title} key={project.id}>{project.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={descriptionInputRef} />
        </div>
        <div>
          <label htmlFor="personelAssigned">Assign Personel</label>
          <input type="text" id="personelAssigned" ref={personelInputRef} />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select value={statusValue} onChange={statusValueHandler}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Late">Late</option>
          </select>
        </div>
        <div>
          <label htmlFor="importance">Priority</label>
          <select
            value={importanceValue}
            onChange={importanceValueHandler}
            placeholder="Importance"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select
            value={typeValue}
            onChange={typeValueHandler}
            placeholder="Type"
          >
            <option value="Create">Create</option>
            <option value="Edit">Edit</option>
            <option value="Fix">Fix</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" placeholder="Date" ref={dateInputRef} />
        </div>

        <div>
          <button onClick={props.onClose}>Close</button>
          <button type="submit">Add Project</button>
        </div>
      </form>
    </Modal>
  );
}

export default AddTicketForm;

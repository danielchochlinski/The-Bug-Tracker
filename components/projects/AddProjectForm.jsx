import { useRef, useState } from "react";

import Modal from "../ui/Modal";

function AddProjectForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [statusValue, setStatusValue] = useState("");
  const [importanceValue, setImportanceValue] = useState("");
  const dateInputRef = useRef();
  const targetDateInputRef = useRef();

  const statusValueHandler = (e) => {
    setStatusValue(e.target.value);
  };
  const importanceValueHandler = (e) => {
    setImportanceValue(e.target.value);
  };

  const addProjectHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTargetDate = targetDateInputRef.current.value

    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      status: statusValue,
      importance: importanceValue,
      date: enteredDate,
      targetDate: enteredTargetDate,
    };
    props.onAddProject(projectData)
  };

  return (
    <Modal>
      <form onSubmit={addProjectHandler}>
        <div>
          <label htmlFor="title">Project Name</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={descriptionInputRef} />
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
          <label htmlFor="importance">Importance</label>
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
          <label htmlFor="date">Date</label>
          <input type="date" id="date" placeholder="Date" ref={dateInputRef} />
        </div>
        <div>
          <label htmlFor="targetDate">Target Date</label>
          <input
            type="date"
            id="targetDate"
            placeholder="Target Date"
            ref={targetDateInputRef}
          />
        </div>
        <div>
          <button onClick={props.onClose}>Close</button>
          <button type="submit">Add Project</button>
        </div>
      </form>
    </Modal>
  );
}

export default AddProjectForm;

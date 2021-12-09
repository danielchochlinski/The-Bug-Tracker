import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import Modal from "../ui/Modal";
import classes from "./AddTicketForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function AddTicketForm(props) {
  const [projects, setProjects] = useState([]);

  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredProjectId,
    isValid: projectIdIsValid,
    hasError: projectIdInputHasError,
    valueChangeHandler: projectIdChangeHandler,
    inputBlurHandler: projectIdBlurHandler,
    reset: resetProjectIdInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPersonel,
    isValid: personelIsValid,
    hasError: personelInputHasError,
    valueChangeHandler: personelChangeHandler,
    inputBlurHandler: personelBlurHandler,
    reset: resetPersonelInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredStatus,
    isValid: statusIsValid,
    hasError: statusInputHasError,
    valueChangeHandler: statusChangeHandler,
    inputBlurHandler: statusBlurHandler,
    reset: resetStatusInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredImportance,
    isValid: importanceIsValid,
    hasError: importanceInputHasError,
    valueChangeHandler: importanceChangeHandler,
    inputBlurHandler: importanceBlurHandler,
    reset: resetImportanceInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredType,
    isValid: typeIsValid,
    hasError: typeInputHasError,
    valueChangeHandler: typeChangeHandler,
    inputBlurHandler: typeBlurHandler,
    reset: resetTypeInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    titleIsValid &&
    projectIdIsValid &&
    descriptionIsValid &&
    statusIsValid &&
    importanceIsValid &&
    personelIsValid &&
    typeIsValid &&
    dateIsValid
  ) {
    formIsValid = true;
  }

  const titleClasses = titleInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const projectIdClasses = projectIdInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const descriptionClasses = descriptionInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const personelClasses = personelInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const statusClasses = statusInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const importanceClasses = importanceInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const typeClasses = typeInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const dateClasses = dateInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const addTicketHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    const ticketData = {
      title: enteredTitle,
      projectId: enteredProjectId,
      description: enteredDescription,
      personel: enteredPersonel,
      status: enteredStatus,
      importance: enteredImportance,
      type: enteredType,
      date: enteredDate,
    };
    props.onAddTicket(ticketData);

    resetTitleInput();
    resetProjectIdInput();
    resetDescriptionInput();
    resetPersonelInput();
    resetStatusInput();
    resetImportanceInput();
    resetTypeInput();
    resetDateInput();
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
      setProjects(projects);

      console.log(projects);
    }
    getProjectsArray();
  }, []);

  return (
    <Modal>
      <form onSubmit={addTicketHandler}>
        <div className={classes.form}>
          <h1>Add Ticket For Project</h1>
          <div className={titleClasses}>
            <label htmlFor="title">Ticket Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
            {titleInputHasError && (
              <p className={classes.textError}>Title canot be empty!</p>
            )}
          </div>
          <div className={descriptionClasses}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
            {descriptionInputHasError && (
              <p className={classes.textError}>Description canot be empty!</p>
            )}
          </div>
          <div className={personelClasses}>
            <label htmlFor="personelAssigned">Assign Personel</label>
            <input
              type="text"
              id="personelAssigned"
              value={enteredPersonel}
              onChange={personelChangeHandler}
              onBlur={personelBlurHandler}
            />
            {personelInputHasError && (
              <p className={classes.textError}>Enter Personel</p>
            )}
          </div>
          <div className={projectIdClasses}>
            <label htmlFor="projectId">Project ID</label>
            <select
              onChange={projectIdChangeHandler}
              onBlur={projectIdBlurHandler}
            >
              <option value="">Select Below</option>
              {projects.map((project) => (
                <option value={project._id.toString()} key={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            {projectIdInputHasError && (
              <p className={classes.textError}>Chose project!</p>
            )}
          </div>
          <div className={statusClasses}>
            <label htmlFor="status">Status</label>
            <select
              value={enteredStatus}
              onChange={statusChangeHandler}
              onBlur={statusBlurHandler}
            >
              <option value="">Chose Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
              <option value="Late">Late</option>
            </select>
            {statusInputHasError && (
              <p className={classes.textError}>Choose a status!</p>
            )}
          </div>
          <div className={importanceClasses}>
            <label htmlFor="importance">Priority</label>
            <select
              value={enteredImportance}
              onChange={importanceChangeHandler}
              onBlur={importanceBlurHandler}
            >
              <option value="">Chose Importance</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
            {importanceInputHasError && (
              <p className={classes.textError}>Choose urgency!</p>
            )}
          </div>
          <div className={typeClasses}>
            <label htmlFor="type">Type</label>
            <select
              value={enteredType}
              onChange={typeChangeHandler}
              onBlur={typeBlurHandler}
              placeholder="Type"
            >
              <option value="">Chose Type</option>
              <option value="Create">Create</option>
              <option value="Edit">Edit</option>
              <option value="Fix">Fix</option>
            </select>
            {typeInputHasError && (
              <p className={classes.textError}>Select type of Ticket!</p>
            )}
          </div>
          <div className={dateClasses}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
            />
            {dateInputHasError && (
              <p className={classes.textError}>Pick a valid date!</p>
            )}
          </div>
          <div>
            <button onClick={props.onClose}>Close</button>
            <button type="submit" disabled={!formIsValid}>
              Add Project
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddTicketForm;

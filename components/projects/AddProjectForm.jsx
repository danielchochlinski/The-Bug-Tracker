import useInput from "../../hooks/useInput";
import Modal from "../ui/Modal";

import classes from "./AddProjectForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function AddProjectForm(props) {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
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
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredTargetDate,
    isValid: targetDateIsValid,
    hasError: targetDateInputHasError,
    valueChangeHandler: targetDateChangeHandler,
    inputBlurHandler: targetDateBlurHandler,
    reset: resetTargetDateInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    titleIsValid &&
    descriptionIsValid &&
    statusIsValid &&
    importanceIsValid &&
    dateIsValid &&
    targetDateIsValid
  ) {
    formIsValid = true;
  }

  const titleClasses = titleInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const descriptionClasses = descriptionInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const statusClasses = statusInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const importanceClasses = importanceInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const dateClasses = dateInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const targetDateClasses = targetDateInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const addProjectHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      status: enteredStatus,
      importance: enteredImportance,
      date: enteredDate,
      targetDate: enteredTargetDate,
    };
    
    props.onAddProject(projectData);

    resetTitleInput();
    resetDescriptionInput();
    resetStatusInput();
    resetImportanceInput();
    resetDateInput();
    resetTargetDateInput();
  };

  return (
    <Modal>
      <form onSubmit={addProjectHandler}>
        <div className={classes.form}>
          <div className={titleClasses}>
            <label htmlFor="title">Project Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
            {titleInputHasError && (
              <p className={classes.textError}>Title cannot be empty!</p>
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
              <p className={classes.textError}>Description cannot be empty!</p>
            )}
          </div>
          <div className={statusClasses}>
            <label htmlFor="status">Status</label>
            <select
              value={enteredStatus}
              onChange={statusChangeHandler}
              onBlur={statusBlurHandler}
            >
              <option value="">Choose Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
              <option value="Late">Late</option>
            </select>
            {statusInputHasError && (
              <p className={classes.textError}>
                Choose status for this project!
              </p>
            )}
          </div>
          <div className={importanceClasses}>
            <label htmlFor="importance">Importance</label>
            <select
              value={enteredImportance}
              onChange={importanceChangeHandler}
              onBlur={importanceBlurHandler}
            >
              <option value="">Choose Urgency</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
            {importanceInputHasError && (
              <p className={classes.textError}>
                Choose urgency for this project!
              </p>
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
              <p className={classes.textError}>Enter Date</p>
            )}
          </div>
          <div className={targetDateClasses}>
            <label htmlFor="targetDate">Target Date</label>
            <input
              type="date"
              id="targetDate"
              value={enteredTargetDate}
              onChange={targetDateChangeHandler}
              onBlur={targetDateBlurHandler}
            />
            {targetDateInputHasError && (
              <p className={classes.textError}>Enter Target Date!</p>
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

export default AddProjectForm;

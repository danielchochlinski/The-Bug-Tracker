import { useState, useEffect } from "react";

import useInput from "../../hooks/useInput";

import Modal from "../ui/Modal";
import classes from "./AddCommentForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function AddCommentForm(props) {
  const {
    value: enteredCommenter,
    isValid: commenterIsValid,
    hasError: commenterInputHasError,
    valueChangeHandler: commenterChangeHandler,
    inputBlurHandler: commenterBlurHandler,
    reset: resetCommenterInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput(isNotEmpty);

  const formIsValid = false;

  if (commenterIsValid && messageIsValid && dateIsValid) {
    formIsValid = true;
  }

  const commenterClasses = commenterInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const messageClasses = messageInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const dateClasses = dateInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const addCommentHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const commentData = {
      title: "",
      commenter: enteredCommenter,
      message: enteredMessage,
      date: enteredDate,
    };

    props.onAddComment(commentData);

    resetCommenterInput();
    resetMessageInput();
    resetDateInput();
  };

  return (
    <Modal>
      <div>Add Comment for {props.title}</div>
      <form onSubmit={addCommentHandler}>
        <div className={commenterClasses}>
          <label htmlFor="Commenter">Commenter</label>
          <input
            type="text"
            value={enteredCommenter}
            onChange={commenterChangeHandler}
            onBlur={commenterBlurHandler}
          />
          {commenterInputHasError && (
            <p className={classes.textError}>Choose Author</p>
          )}
        </div>
        <div className={messageClasses}>
          <label htmlFor="Message">Message</label>
          <input
            type="text"
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageInputHasError && (
            <p className={classes.textError}>Message canot be empty!</p>
          )}
        </div>
        <div className={dateClasses}>
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {dateInputHasError && (
            <p className={classes.textError}>Please select a date!</p>
          )}
        </div>
        <button type="submit" disabled={!formIsValid}>
          Add Comment
        </button>
        <button onClick={props.onClose}>X</button>
      </form>
    </Modal>
  );
}
export default AddCommentForm;

/* Commentter, Mesage, Date */

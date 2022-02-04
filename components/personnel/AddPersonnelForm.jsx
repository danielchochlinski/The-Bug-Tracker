import useInput from "../../hooks/useInput";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";
import classes from "./AddPersonnelForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";

function AddPersonnelForm(props) {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

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

  // const {
  //   value: enteredFile,
  //   isValid: fileIsValid,
  //   hasError: fileInputHasError,
  //   valueChangeHandler: fileChangeHandler,
  //   inputBlurHandler: fileBlurHandler,
  //   reset: resetFileInput,
  // } = useInput(isNotEmpty);

  // Profile Image Input
  const [selectedFile, setSelectedFile] = useState(null)
  const onSelectFile = (e) => {
    setSelectedFile(e.target.value)
  }
  //End Progile Image Input

  //Language Input
  const [language, setLanguage] = useState(["html", "javascript", "css3"]);

  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const onCheckHandle = (event) => {
    const { checked, value } = event.currentTarget;

    setSelectedLanguage((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  //End Language Input

  let formIsValid = false;

  if (nameIsValid && titleIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  const nameClasses = nameInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const titleClasses = titleInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const descriptionClasses = descriptionInputHasError
    ? classes.formControlInvalid
    : classes.formControl;


  const addPersonnelHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    const personnelData = {
      name: enteredName,
      title: enteredTitle,
      description: enteredDescription,
      image: selectedFile,
      languages: selectedLanguage,
    };

    props.onAddPersonnel(personnelData);
  };
  return (
    <Modal>
      <form onSubmit={addPersonnelHandler}>
        <div className={classes.form}>
          <div className={nameClasses}>
            <label htmlFor="name">Developers Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className={classes.textError}>Entered Developers Name</p>
            )}
          </div>
          <div className={titleClasses}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
          </div>
          <div className={descriptionClasses}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
          </div>
          <div>
            <label htmlFor="file">Uplad Profile Picture</label>
            <input type="file" vlue={selectedFile} onChange={onSelectFile} />
          </div>

          {language.map((lang) => (
            <div>
              <label htmlFor={lang}>{lang}</label>
              <input
                className={classes.checkmark}
                type="checkbox"
                onChange={onCheckHandle}
                value={lang}
              />
            </div>
          ))}
          <div>
            <button onClick={props.onClose}>Close</button>
            <button type="submit" disabled={!formIsValid}>Add Personnel</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
export default AddPersonnelForm;

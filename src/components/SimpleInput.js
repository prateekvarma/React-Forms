import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //to check if the name field is yet entered or not.

  const enteredNameIsValid = enteredName.trim() !== ""; //replaced an entire state with a simple boolean expression.
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; //if user has initially typed into the form, and the field is valid.

  let formIsValid = false; // checks validity of the whole form

    if (enteredNameIsValid) {
      //if had more fields we could if(enteredNameIsValid && ageIsValid)
      formIsValid = true;
    }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return; //break the current function's execution
    }

    console.log(enteredName);

    setEnteredName(""); //clear input field
    setEnteredNameTouched(false); //without this, the error message persists after submit
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlueHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false; // checks validity of the whole form

  if (enteredNameIsValid) {
    //if had more fields we could if(enteredNameIsValid && ageIsValid)
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return; //break the current function's execution
    }

    console.log(enteredName);
    resetNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlueHandler}
          value={enteredName}
        />
        {nameInputHasError && (
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

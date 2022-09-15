import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

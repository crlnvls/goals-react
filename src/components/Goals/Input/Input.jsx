import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./Input.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#f4b9b9" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // &.invalid input {
  //   border-color: red;
  //   background-color: #f4b9b9;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl
        invalid={!isValid}
        // className={!isValid && "invalid"}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      {/* <div
        // Dynamic Styles
        className={`form-control ${!isValid ? "invalid" : ""}`}
      >
        <label
        // Inline Styles
        // style={{ color: !isValid ? "red" : "black" }}
        >
          Course Goal
        </label>
        <input
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc",
          //   backgroundColor: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default Input;

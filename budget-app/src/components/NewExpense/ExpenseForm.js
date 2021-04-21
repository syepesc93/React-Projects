import React, { useState } from "react";
/* CSS */
import "./ExpenseForm.css";

/* expense form component */
const ExpenseForm = (props) => {
  /* states */
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /* event handlers */
  const titleChangeHandler = (event) => {
    // setEnteredtTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredtAmount(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredtDate(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent of submitting form info

    // capture form info
    const expenseData = {
      expenseTitle: userInput.enteredTitle,
      expenseAmount: userInput.enteredAmount,
      expenseDate: new Date(userInput.enteredDate),
    };

    // pass data to parent component (NewExpense)
    props.onSaveExpenseData(expenseData);

    // clear form
    setUserInput((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  /* JSX */
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
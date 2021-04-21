import React, { useState } from "react";
/* CSS */
import "./ExpenseItem.css";
/* inner components */
import ExpenseDate from "./ExpenseDate";
/* wrapper components */
import Card from "../UI/Card";

/* expense item component */
const ExpenseItem = (props) => {
  /* states */
  const [expenseTitle, setExpenseTitle] = useState(props.expenseTitle);

  /* event handlers */
  const clickHandler = () => {
    setExpenseTitle("Updated!");
    console.log(expenseTitle);
  };

  /* JSX */
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;

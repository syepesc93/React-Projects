import React from "react";
/* CSS */
import "./ExpenseItem.css";
/* inner components */
import ExpenseDate from "./ExpenseDate";
/* wrapper components */
import Card from "../UI/Card";

/* expense item component */
const ExpenseItem = (props) => {
  /* JSX */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

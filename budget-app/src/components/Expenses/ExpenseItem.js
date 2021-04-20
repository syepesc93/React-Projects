import React from "react";
/* CSS */
import "./ExpenseItem.css";
/* inner components */
import ExpenseDate from "./ExpenseDate";
/* wrapper components */
import Card from "../UI/Card";

/* expense item component */
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />

      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

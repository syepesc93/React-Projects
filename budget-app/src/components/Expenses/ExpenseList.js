import React from "react";
/* CSS */
import "./ExpenseList.css";
/* inner components */
import ExpenseItem from "./ExpenseItem";
/* wrapper components */
import Card from "../UI/Card";

/* expense list component */
function ExpenseList(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={props.expenses[0].title}
        expenseAmount={props.expenses[0].amount}
        expenseDate={props.expenses[0].date}
      />
      <ExpenseItem
        expenseTitle={props.expenses[1].title}
        expenseAmount={props.expenses[1].amount}
        expenseDate={props.expenses[1].date}
      />
      <ExpenseItem
        expenseTitle={props.expenses[2].title}
        expenseAmount={props.expenses[2].amount}
        expenseDate={props.expenses[2].date}
      />
      <ExpenseItem
        expenseTitle={props.expenses[3].title}
        expenseAmount={props.expenses[3].amount}
        expenseDate={props.expenses[3].date}
      />
    </Card>
  );
}

export default ExpenseList;

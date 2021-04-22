import React from "react";
/* CSS */
import "./NewExpense.css";
/* inner components */
import ExpenseForm from "./ExpenseForm";

/* new expense component */
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // this could generate repeated ids - must change id generator
    };

    // pass data to parent component
    props.onAddExpense(expenseData);
  };

  /* JSX */
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

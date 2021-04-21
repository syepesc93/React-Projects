import React from "react";
/* CSS */
import "./NewExpense.css";
/* inner components */
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  /* JSX */
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";
/* CSS */
import "./Expenses.css";
/* inner components */
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
/* wrapper components */
import Card from "../UI/Card";

/* expense list component */
const Expenses = (props) => {
  /* states */
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  /* event handlers */
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* JSX */
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

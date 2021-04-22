import React, { useState } from "react";
/* CSS */
import "./ExpenseList.css";
/* inner components */
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
/* wrapper components */
import Card from "../UI/Card";

/* expense list component */
const ExpenseList = (props) => {
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

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;

import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const intEnteredAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      intEnteredAmount < 1 ||
      intEnteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(intEnteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid ? "Please enter a valid amount (1-5)" : ""}
    </form>
  );
};

export default MealItemForm;

import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  //   const [title,setUserInput] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    dateValue: "",
  });

  function titleHandler(event) {
    // setUserInput((prev) => {
    //   return {
    //     ...prev,
    //     title: event.target.value,
    //   };
    // });
    setUserInput({ ...userInput, title: event.target.value });
    console.log(event.target.value);
  }
  function amountHandler(event) {
    setUserInput({ ...userInput, amount: event.target.value });
    console.log(event.target.value);
  }
  function dateHandler(event) {
    setUserInput({ ...userInput, dateValue: event.target.value });
    console.log(event.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const expense = {
      //   title,
      //   amount,
      //   date: new Date(dateValue),
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.dateValue),
    };
    console.log(expense);

    setUserInput({ ...userInput, title: "", amount: "", dateValue: "" });
    props.onSaveExpenseData(expense);
  }

  return (
    <form className="new-expense_controls" onSubmit={submitHandler}>
      <div className="new-expnese_control">
        <label>Title</label>
        <input
          type="text"
          onChange={titleHandler}
          value={userInput.title}
        ></input>
      </div>
      <div className="new-expnese_control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={userInput.amount}
          onChange={amountHandler}
        ></input>
      </div>
      <div className="new-expnese_control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={userInput.dateValue}
          onChange={dateHandler}
        ></input>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

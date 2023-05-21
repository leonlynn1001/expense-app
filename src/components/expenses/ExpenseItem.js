import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item Working");
  const clickHandler = () => {
    setTitle("Updated");

    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate calendar={props.date} />

      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <ExpenseTitle title={title} />

        <ExpenseAmount amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

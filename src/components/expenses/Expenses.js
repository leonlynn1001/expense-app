import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import { expenses } from "../../App";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  function filterChangeHandler(event) {
    setFilterYear(event);
  }
  return (
    <div>
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filterYear}
      />
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default Expenses;

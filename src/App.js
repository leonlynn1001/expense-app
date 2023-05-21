import "./components/expenses/Expenses.css";
import Card from "./components/ui/Card";

import ExpenseItem from "./components/expenses/ExpenseItem";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log(expenses);
  function expenseHandler(expense) {
    console.log("In The App");

    setExpenses((expenses) => {
      expenses.push(expense);
      // return [...expenses, expense];
    });
  }
  console.log(expenses);
  return (
    <Card className="expenses">
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={DUMMY_EXPENSES} />
    </Card>
  );
}

export default App;

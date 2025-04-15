import React, { useState } from "react";
import ExpenseTab from "./components/ExpenseTab";
import ExpenseChart from "./components/ExpenseChart";
import SearchOpt from "./components/SearchOpt";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) => {
    const keyword = search.toLowerCase();
    return (
      expense.name.toLowerCase().includes(keyword) ||
      expense.description.toLowerCase().includes(keyword) ||
      expense.category.toLowerCase().includes(keyword) ||
      expense.date.includes(keyword)
    );
  });

  return (
    <div className="container">
      <h1 className="title">Expense Tracker</h1>
      <p className="subtitle">
        Start taking control of your finances with this tracker.
      </p>
      <div className="main">
        <div className="left">
          <ExpenseTab onAddExpense={addExpense} />
        </div>
        <div className="right">
          <SearchOpt search={search} setSearch={setSearch} />
          <ExpenseChart expenses={filteredExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
};

export default App;

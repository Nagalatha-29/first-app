import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);

  const filtered =
    filter === "All"
      ? transactions
      : transactions.filter((t) =>
          filter === "Income" ? t.amount > 0 : t.amount < 0
        );

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <div className="balance">
        Balance: ₹{balance}
      </div>

      <form onSubmit={addTransaction} className="form">
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (+income / -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button>Add Transaction</button>
      </form>

      <div className="filter">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <ul className="list">
        {filtered.map((t) => (
          <li
            key={t.id}
            className={t.amount > 0 ? "income" : "expense"}
          >
            {t.text}
            <span>₹{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
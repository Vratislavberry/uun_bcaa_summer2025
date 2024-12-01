import "./App.css";
import { useState } from "react";
import TransactionList from "./TransactionList";
import Toolbar from "./Toolbar";
import CurrentTime from "./CurrentTime";

function App() {
  const [filter, setFilter] = useState("all");

  console.log(filter);

  const transactionList = [
    { id: "t01", name: "Večeře s rodinou", amount: 1000, type: "debit" },
    { id: "t02", name: "tankování", amount: 2345.3, type: "debit" },
    { id: "t03", name: "Kafe", amount: 75, type: "debit" },
    { id: "t04", name: "Výplata", amount: 18004, type: "credit" },
    { id: "t05", name: "Nákup potravin", amount: 3234, type: "debit" },
  ];

  const filteredList = transactionList.filter((transaction) => {
    if (filter === "all") return true;
    else if (filter === "credit") return transaction.type === "credit";
    else return transaction.type === "debit";
  });

  return (
    <div className="App">
      <h1>Přehled mých finančních transakcí</h1>
      <CurrentTime />
      <Toolbar filter={filter} setFilter={setFilter} />
      <TransactionList transactionList={filteredList} />
    </div>
  );
}

export default App;

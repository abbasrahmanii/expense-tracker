import React from "react";
import Transaction from "./Transaction";
import { GlobalState } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalState);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

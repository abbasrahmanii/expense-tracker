import React, { useContext } from "react";
import Transaction from "./Transaction";
import { Store } from "../context/Store";

const TransactionList = () => {
  const { state } = useContext(Store);
  const { transactions } = state;
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

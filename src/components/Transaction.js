import React, { useContext } from "react";

const Transaction = () => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      Salary <span>+ 50,000</span>
      <button>X</button>
    </li>
  );
};

export default Transaction;

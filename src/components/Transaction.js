import React, { useContext } from "react";
import { Store } from "../context/Store";

//Money formatter function
const moneyFormatter = (num) => {
  let p = num.toFixed(2).split(".");
  return `$ ${
    p[0]
      .split("")
      .reverse()
      .reduce(
        (acc, num, i, orig) =>
          num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc,
        ""
      ) +
    "." +
    p[1]
  }`;
};

const Transaction = ({ transaction }) => {
  const { dispatch } = useContext(Store);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TRANSACTION", payload: transaction.id })
        }
      >
        X
      </button>
    </li>
  );
};

export default Transaction;

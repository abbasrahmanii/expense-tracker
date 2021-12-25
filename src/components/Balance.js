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

const Balance = () => {
  const { state } = useContext(Store);
  const { transactions } = state;
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h4>Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  );
};

export default Balance;

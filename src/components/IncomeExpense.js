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

const IncomeExpense = () => {
  const { state } = useContext(Store);
  const { transactions } = state;
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter((item) => item <= 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

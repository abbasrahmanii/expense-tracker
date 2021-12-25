import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const AddTransition = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransition } = useContext(GlobalState);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransition(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input type="text" placeholder="Enter label..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense , +income]
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransition;

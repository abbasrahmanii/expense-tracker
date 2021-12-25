import React, { useState, useContext } from "react";
import { Store } from "../context/Store";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { dispatch } = useContext(Store);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            placeholder="Enter label..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense , +income]
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;

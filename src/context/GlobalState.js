import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const InitialState = { transactions: [] };
// const InitialState = [
//   { id: 1, label: "Flower", amount: -20 },
//   { id: 2, label: "Salary", amount: 300 },
//   { id: 3, label: "Book", amount: -10 },
//   { id: 4, label: "Camera", amount: 150 },
// ];

//Create Context
export const GlobalContext = createContext(InitialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InitialState, AppReducer);
  // Actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

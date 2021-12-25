import React, { createContext, useReducer } from "react";
// import { useContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  transactions: [
    // { id: 1, label: "Abbas", amount: 3 },
    // { id: 2, label: "Abbas", amount: 43 },
    // { id: 3, label: "Abbas", amount: -43 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// export const StoreProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return (
//     <StoreProvider.Provider value={value}>
//       {props.children}
//     </StoreProvider.Provider>
//   );
// };
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

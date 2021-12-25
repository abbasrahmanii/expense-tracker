import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
// import { GlobalProvider } from "./context/GlobalState";
import { StoreProvider } from "./context/Store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        {/* <GlobalProvider> */}
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
        {/* </GlobalProvider> */}
      </StoreProvider>
    </div>
  );
}

export default App;

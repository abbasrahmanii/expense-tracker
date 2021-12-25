import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </GlobalProvider>
    </div>
  );
}

export default App;

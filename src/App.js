
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(), 
    date: new Date(2024, 10, 22),
    title: "New Book",
    price: 30.99
  },
  {
    id: Math.random().toString(), 
    date: new Date(2024, 10, 22),
    title: "New jeans",
    price: 99.99
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    } )
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={DUMMY_EXPENSES} />
    </div>
  );
}

export default App;

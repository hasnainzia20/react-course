import React, { useState } from "react";
import Expenses from "./expense-tracker-components/Expenses/Expenses";

import NewExpense from "./expense-tracker-components/NewExpenses/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: '60.00',
    date: new Date(2022, 9, 22)
  },
  {
    id: 'e2',
    title: 'Car',
    amount: '6.00',
    date: new Date(2022, 10, 11)
  },
  {
    id: 'e3',
    title: 'Maintenance',
    amount: '161.00',
    date: new Date(2019, 0, 12)
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
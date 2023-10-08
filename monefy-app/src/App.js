import './App.css';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpenseCategories } from './constants';
import PieChart from './PieChart';

function App() {
  const dispatch = useDispatch();
  const expensesArr = useSelector((state) => state.expensesArr);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(ExpenseCategories.OTHER);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDeleteExpense = (index) => {
    // e.preventDefault()
    dispatch({ type: 'delete', payload: index});
  };

  const handleAddExpense = () => {
    
    if (description && amount) {
      // e.preventDefault()

      const newExpense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
      };

      dispatch({type: 'add', payload: newExpense });

      setDescription('');
      setAmount('');
    }
  };

  const expensesByCategory = {};

  expensesArr.forEach((expense) => {
    const { category, amount } = expense;
    if (expensesByCategory[category]) {
      expensesByCategory[category] += amount;
    } else {
      expensesByCategory[category] = amount;
    }
  });

  const pieChartData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: [
          'rgba(255, 100, 180, 0.8)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(118, 139, 153, 0.57)',
        ],
      },
    ],
  };

  const calculateTotalExpenses = () => {
    return expensesArr.reduce((total, expense) => total + expense.amount, 0);
  };

  const filteredExpenses = selectedCategory
  ? expensesArr.filter((expense) => expense.category === selectedCategory)
  : expensesArr;

  return (
  <div className="app">
    <div className='app-container'>

      <div className='header-container'>
        <div className='inputs first-column'>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>
        </div>
        
        <div className='inputs second-column'>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {Object.values(ExpenseCategories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>

      <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>

          <option value="">All Categories</option>
          {Object.values(ExpenseCategories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}

      </select>

      <h2>Total expenses: {calculateTotalExpenses()}</h2>
      
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            <span>
              {expense.description} - {expense.amount}$ - {expense.category}{' '}
            </span>
            <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <PieChart data={pieChartData} />
    </div>

  </div>
  );
}

export default App;

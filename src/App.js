import logo from './logo.svg';
import './App.css';
import Expense from './component/Expense.js';
import Card from './component/Card';
import NewExpense from './NewExpense/NewExpense';
import React,{useState} from 'react';
const dummy_data=[
  {
    Date:'brijesh',
    Money:234,
    Details:'breijhskdjls'
  },
     {
    Date:'chauhan',
    Money:24,
    Details:'firest'
  }
]
function App() {
  const [datta,setDatta]=useState('');
  const [datas,setDatas]=useState(dummy_data);
  const expenseDataInApp=(expenseData)=>{
    const newExpenseData={
      ...expenseData,
      id:Math.random().toString()
    }
    console.log(newExpenseData);
    setDatta(newExpenseData);
    setDatas((expenseData)=>{
      return [newExpenseData,...expenseData];
     });
  }

  return (
    <div className="App">
     <h1>Brijesh Start</h1>
     <NewExpense
     onSaveExpenseDataInApp={expenseDataInApp}
     />
    <Expense data={datas}/>
    <p>{datta.id}**********{datta.Date}*******{datta.Money}</p>
    
    <Card>
    <a>this is the children</a>
    </Card>
    </div>
  );
  
}

export default App;

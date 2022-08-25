import { useState } from "react";
import React from "react";
 const Expenseform=(props)=>{
     const [date,newDate]=useState('');
     const [money,newMoney]=useState(null);
     const [details,newDetails]=useState('');
     const detailsChangeHandler=(event)=>{
        newDetails(event.target.value);
     }
     const dateChangeHandler=(event)=>{
             newDate(event.target.value);
     }
     const moneyChangeHandler=(event)=>{
        newMoney(event.target.value);
     }
     const submitHandler=(event)=>{
        event.preventDefault();
            const expensedata={
                Date:date,
                Money:money,
                Details:details
            }
            props.onSaveExpenseData(expensedata);
            console.log(expensedata);
     }

    return(
      <form onSubmit={submitHandler}>
      <label>Date</label>
      <input type='date' onChange={dateChangeHandler}></input>
      <label>amount</label>
      <input type='number' onChange={moneyChangeHandler}></input>

      <label>details</label>
      <input type='text' onChange={detailsChangeHandler}></input>

      <input type="submit" value="Submit" />
      </form>
    )
 }
 export default Expenseform;
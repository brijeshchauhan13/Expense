import React from "react";
import Expenseform from "./Expenseform";
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expensedata={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expensedata);
        props.onSaveExpenseDataInApp(enteredExpenseData);
    }
    return (
     <Expenseform
       onSaveExpenseData={saveExpenseDataHandler}
     />
    )
}
export default NewExpense;
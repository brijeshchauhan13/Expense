import React  from "react";
import ExpenseItemStyle from './ExpenseItemStyle.css';
const ExpenseItem=(props)=>{
    return (
        <div className="a" >
        <h5 className="b">{props.Date}</h5>
        <h5 className="b">{props.Money}</h5>
        <h5 className="b">{props.Details}</h5>
        </div>
    )
}
export default ExpenseItem;
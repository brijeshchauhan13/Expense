import React  from "react";
import Card from "./Card";
import ExpenseItem  from "./ExpenseItem";
const  Expense=(props)=>{
    return (
          <Card>
       
          { props.data.map((x)=>{
        
           return <ExpenseItem Date={x.Date} Money={x.Money} Details={x.Details}/>
            }
            )}

          </Card>
        
    )
}


export default Expense ;
//i was have problem bcz i was not adding return keyword
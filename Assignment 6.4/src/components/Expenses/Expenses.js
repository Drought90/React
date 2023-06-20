import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props){
    const [yearChosen, setYearChosen] = useState("2020");
    const saveSelectDataHandler = (value) => {
      //console.log(value);
      setYearChosen(value);
    };
    const expensesByYear = props.items.filter(exp => {
      return exp.date.getFullYear().toString() === yearChosen
    });
    
    return <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearChosen} onYearChange={saveSelectDataHandler}/>
        <ExpensesList items={expensesByYear}/>
    </Card>
    </div>
}

export default Expenses;
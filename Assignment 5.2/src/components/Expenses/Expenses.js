import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses(props){
    const [yearChosen, setYearChosen] = useState("2020");
    const saveSelectDataHandler = (value) => {
      console.log(value);
      setYearChosen(value);
    };
    return <div>
      <ExpensesFilter onYearChange={saveSelectDataHandler}/>
      <Card className="expenses">
        <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
}

export default Expenses;
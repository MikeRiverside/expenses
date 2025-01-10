import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import { useState } from "react"
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('all')

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = filteredYear === 'all' ? props.expenses : props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearChange=
            {yearChangeHandler} />
            <ExpensesList expenses={filteredExpenses} />  
        </Card>
    )
}


export default Expenses
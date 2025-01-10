import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import { useState } from "react"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler} />
            {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}
export default Expenses
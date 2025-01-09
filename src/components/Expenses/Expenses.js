import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"

const Expenses = (props) => {
    const yearChangeHandler = (year) => {
        console.log(year)
    }
return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler} />
            <ExpenseItem data={props.expenses[0]} />
            <ExpenseItem data={props.expenses[1]} />
        </Card>
    )
}
export default Expenses
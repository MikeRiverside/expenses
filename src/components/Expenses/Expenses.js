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
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} data={expense} />
                })
            }       
        </Card>
    )
}
export default Expenses
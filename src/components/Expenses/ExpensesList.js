import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    return(
        <>
                {
                props.expenses.length === 0 && <h2>No expenses found!</h2>
                }
            <ul>
            {props.expenses.length > 0 && props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} data={expense} />
            ))}
            </ul>
        </>
    )
}
export default ExpensesList
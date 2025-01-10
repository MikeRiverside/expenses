import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.expenses.length === 0){  
        return <h2 className="expenses-list__fallback">No expenses found!</h2>
    }   
    return(
        <ul className="expenses-list">
            {props.expenses.length > 0 && props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} data={expense} />;
            })}
     </ul>
    )
}


export default ExpensesList
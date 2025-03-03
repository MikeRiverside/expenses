import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.data.date}/>
                <div className="expense-item__description">
                    <h2>{props.data.title}</h2>
                    <div className="expense-item__price">{props.data.price}</div>
                </div>
            </Card>
         </li>
    )
}

export default ExpenseItem
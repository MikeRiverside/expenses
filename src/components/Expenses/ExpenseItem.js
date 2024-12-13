import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Vajutatud!")
    }

    console.log(props.data.date)
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Vajuta mind</button>
         </Card>
    )
}

export default ExpenseItem
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"
import { useState } from "react"

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title)

    const clickHandler = () => {
        console.log("Vajutatud!")
        setTitle(`uuendatud by click ${title}"`)
        console.log(title)
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
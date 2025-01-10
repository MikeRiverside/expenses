import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState ("");
    const [enteredPrice, setEnteredPrice] = useState ("");
    const [enteredDate, setEnteredDate] = useState ("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Pealkiri</label>
                    <input 
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Hind</label>
                    <input 
                        type="number" min="0,01" step="0,01"
                        onChange={priceChangeHandler}
                        value={enteredPrice}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Kuupäev</label>
                    <input 
                        type="date" min="2023-11-12" max="2025-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Lisa kuluartikkel</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
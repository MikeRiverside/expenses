import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Pealkiri</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Hind</label>
                    <input type="number" min="0,01" step="0,01"/>
                </div>
                <div className="new-expense__control">
                    <label>Kuupäev</label>
                    <input type="date" min="2024-11-12" max="2026-01-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Lisa kuluartikkel</button>
            </div>
        </form>
    )
}

export default ExpenseForm
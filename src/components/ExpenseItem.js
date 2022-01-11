import "./ExpenseItem.css"

function ExpenseItem() {
    const expenseDate = new Date (2022, 0, 10)


    return ( 
        <div className="expense-item">
            <div >January 10th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.99</div>
            </div>
        </div>

     );
}

export default ExpenseItem;
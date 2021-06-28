import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";

let ExpenseItem = (props) => {
  console.log(props)
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const expenseAmount = props.amount;
  

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

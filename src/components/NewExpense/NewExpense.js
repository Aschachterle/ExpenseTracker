import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setClicked(true);
  };
  const stopEditingHandler = () => {
    setClicked(false)
  }


  return (
    <>
      <div className="new-expense">
        {!clicked && <button onClick={startEditingHandler}>Add Item</button>}
        {clicked && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
      </div>
    </>
  );
};

export default NewExpense;

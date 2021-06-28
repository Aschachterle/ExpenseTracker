import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expensesFilterHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredList = props.item.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            filteredExpenses={expensesFilterHandler}
            defaultYear={filteredYear}
          ></ExpensesFilter>
          <ExpensesChart expenses={filteredList} />
          <ExpensesList items={filteredList} />
        </Card>
      </li>
    </>
  );
};

export default Expenses;

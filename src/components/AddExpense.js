import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from "../action/expenses";

const AddExpense = (props) => {
  return (
    <div>
      <h1>Add Expense Page</h1>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }} />
    </div>
  )
}

export default connect()(AddExpense);
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
  return (
    <div>
      <h1>Add Expense Page</h1>
      <ExpenseForm {...props} />
    </div>
  )
}

export default connect()(AddExpense);
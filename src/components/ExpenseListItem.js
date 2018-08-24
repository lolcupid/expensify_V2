import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../action/expenses';

const ExpenseListItem = (props) => {
  const { id, description, note, amount, createdAt } = props.expense;
  return (
    <div>
      <h3>Description: {description}</h3>
      <h4>Note: {note}</h4>
      <p>Amount: ${amount}</p>
      <p>{createdAt}</p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id }))
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default connect()(ExpenseListItem);
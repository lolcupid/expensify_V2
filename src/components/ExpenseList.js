import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>ExpenseList Page</h1>
      {
        props.expenses.map((expense, index) => <p key={index}>{expense.description}</p>)
      }
      {props.filters.text}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList);
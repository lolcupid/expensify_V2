import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from "../action/expenses";

const EditPage = (props) => {
  return (
    <div>
      <h1>Edit Page</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log(expense)
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/");
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditPage);
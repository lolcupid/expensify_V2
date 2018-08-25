import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import visibleExpense from '../selector/expenses';

const ExpenseList = props => {
  return (
    <div>
      <h1>ExpenseList Page</h1>
      {
        props.expenses.map((expense, index) => {
          return <ExpenseListItem key={index} expense={expense} />;
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: visibleExpense(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
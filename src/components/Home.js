import React from "react";
import { connect } from "react-redux";
import ExpenseList from "./ExpenseList";
import { setTextFilter, sortByDate, sortByAmount } from "../action/filters";

const Home = props => {
  return (
    <div>
      <h1>Home Page</h1>
      <input type="text" onChange={props.onFilterText} />
      <select
        onChange={props.onFilterSelect}
      >
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>
      <ExpenseList />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterText: e => {
      const text = e.target.value;
      dispatch(setTextFilter(text));
    },
    onFilterSelect: e => {
      const option = e.target.value;
      if (option === "date") {
        dispatch(sortByDate());
      } else if (option === "amount") {
        dispatch(sortByAmount());
      }
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Home);

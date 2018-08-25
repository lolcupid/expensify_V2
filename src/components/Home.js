import React from "react";
import { connect } from "react-redux";
import ExpenseList from "./ExpenseList";
import { setTextFilter, sortByDate, sortByAmount, startByDate, endByDate } from "../action/filters";
import moment from 'moment';
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

class Home extends React.Component {
  state = {
    focusedInput: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(startByDate(startDate));
    this.props.dispatch(endByDate(endDate));
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <input type="text" onChange={
          (e) => {
            const text = e.target.value;
            this.props.dispatch(setTextFilter(text));
          }
        }
        />
        <select
          onChange={
            e => {
              const option = e.target.value;
              if (option === "date") {
                this.props.dispatch(sortByDate());
              } else if (option === "amount") {
                this.props.dispatch(sortByAmount());
              }
            }
          }
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
        <ExpenseList />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Home);

import 'react-dates/initialize'
import React from "react";
import { addExpense } from "../action/expenses";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    focused: false,
    error: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => {
      return { description };
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    this.setState(() => {
      return { amount };
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => {
      return { note };
    });
  };

  onSubmitChange = e => {
    e.preventDefault();
    const { description, note, amount } = this.state;
    if (!description || !note || !amount) {
      return this.setState({ error: "You need to fill this form completely" });
    }
    this.props.dispatch(addExpense(this.state));
    e.target.elements.description.value = "";
    e.target.elements.amount.value = "";
    e.target.elements.note.value = "";
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitChange}>
          <input
            type="text"
            name="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            name="note"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={createdAt => this.setState({ createdAt })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

import 'react-dates/initialize'
import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    note: this.props.expense ? this.props.expense.note : "",
    amount: this.props.expense ? this.props.expense.amount : "",
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
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
    const { description, note, amount, createdAt } = this.state;
    if (!description || !amount) {
      this.setState({ error: "You need to fill this form completely" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description,
        amount,
        note,
        createdAt : createdAt.valueOf()
      })
      e.target.elements.description.value = "";
      e.target.elements.amount.value = "";
      e.target.elements.note.value = "";
    }
  };

  render() {
    const { description, note, amount, createdAt } = this.state;
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitChange}>
          <input
            type="text"
            name="description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            name="note"
            value={note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={moment(createdAt)}
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

import moment from 'moment';

const visibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateExpense = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateExpense = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const filterExpense = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateExpense && endDateExpense && filterExpense;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? -1 : 1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1;
    }
  })
}

export default visibleExpense;
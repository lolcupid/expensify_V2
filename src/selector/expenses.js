const visibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateExpense = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateExpense = typeof endDate !== 'number' || expense.createAt <= endDate;
    const filterExpense = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateExpense && endDateExpense && filterExpense;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createAt > b.createAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  })
}

export default visibleExpense;
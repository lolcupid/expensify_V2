import database from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense
  }
}

export const startAddExpense = (expenseData) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    return database.ref('expenses').push(expenseData)
      .then((data) => {
        dispatch(addExpense({
          id: data.key,
          ...expenseData
        }))
      })
  }
}

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: id
  }
}

// EDIT EXPENSE
export const editExpense = (id, update) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    update
  }
}

export const setExpense = (expenses) => {
  return {
    type: 'SET_EXPENSE',
    expenses
  }
}

export const startSetExpense = () => {
  return (dispatch) => {                // Using Redux Thunk
    return database.ref('expenses').once('value').then((data) => {
      const expenses = []
      data.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        })
      })
      dispatch(setExpense(expenses))
    })
  }
}
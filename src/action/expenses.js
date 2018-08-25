import uuid from 'uuid';

// ADD EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return {
    type: 'ADD_EXPENSE',
    payload: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
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
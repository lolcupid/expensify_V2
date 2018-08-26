const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.payload);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          }
        } else {
          return expense
        }
      })
    case 'SET_EXPENSE' :
      return [
        ...action.expenses
      ]
    default:
      return state;
  }
}

export default expensesReducer;
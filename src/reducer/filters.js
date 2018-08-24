const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.payload
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'START_BY_DATE':
      return {
        ...state,
        startDate: action.payload
      };
    case 'END_BY_DATE':
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
}

export default filtersReducer;
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducer/expenses';
import filtersReducer from '../reducer/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )
  return store;
};
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducer/expenses';
import filtersReducer from '../reducer/filters';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnchancer(applyMiddleware(thunk))
  )
  return store;
};
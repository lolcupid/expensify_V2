import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/config';
import visibleExpense from './selector/expenses';
import AppRouter from './routers/AppRouter';
import { addExpense } from './action/expenses';
import { setTextFilter } from './action/filters';
import './style/app.scss';

const store = configStore();

store.dispatch(addExpense({description: 'Phone Bill', amount: 100, note:'asdfsdf', createdAt: 1535221051977}))
store.dispatch(addExpense({description: 'Rent Bill', amount: 2200, note:'skjhkjjhgk', createdAt: 1135221051977}))
store.dispatch(addExpense({description: 'Travel Bill', amount: 300, note:'asdl;iopluifsdf', createdAt: 1735221051977}))

const state = store.getState();

const result = visibleExpense(state.expenses, state.filters);
console.log(result);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById("app")
);
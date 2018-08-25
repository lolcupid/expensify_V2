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

store.dispatch(addExpense({ description: 'Rent Bill', amount: 1200 }));
store.dispatch(addExpense({ description: 'Travel Cost', amount: 600 }));
store.dispatch(addExpense({ description: 'Phone Bill', amount: 300 }));

const state = store.getState();

const result = visibleExpense(state.expenses, state.filters);
console.log(result);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById("app")
);
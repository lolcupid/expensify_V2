import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/config';
import visibleExpense from './selector/expenses';
import AppRouter from './routers/AppRouter';
import { startSetExpense } from './action/expenses';
import firebase from './firebase/firebase';
import './style/app.scss';

const store = configStore();

ReactDOM.render(<p>Loading.........</p>, document.getElementById("app"));

store.dispatch(startSetExpense())
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>, document.getElementById("app")
    );
  });
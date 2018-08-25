import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import EditPage from '../components/EditPage';
import AddExpense from '../components/AddExpense';
import ErrorPage from '../components/ErrorPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/expense/:id" component={EditPage} />
        <Route path="/about" component={About} />
        <Route path="/create" component={AddExpense} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
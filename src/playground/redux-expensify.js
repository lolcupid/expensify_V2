import configStore from '../store/config';
import { addExpense, removeExpense, editExpense } from '../action/expenses';
import { setTextFilter, sortByAmount, sortByDate, startByDate, endByDate } from '../action/filters';
import visibleExpense from '../selector/expenses';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visibility = visibleExpense(state.expenses, state.filters)
  console.log(visibility);
})

// DISPATCH =======================
store.dispatch(addExpense({ description: 'Phone', amount: 10000, createAt: 1000 }));
store.dispatch(addExpense({ description: 'Phone Bill Cost', amount: 2000, createAt: 1000 }));
store.dispatch(addExpense({ description: 'Travel Cost', amount: 1000, createAt: 3000 }));
store.dispatch(addExpense({ description: 'Rent Cost', amount: 3000, createAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseTwo.payload.id }));

// store.dispatch(editExpense(expenseThree.payload.id, { amount: 555 }));

store.dispatch(setTextFilter('travel'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(startByDate(1250));
// store.dispatch(startByDate());
// store.dispatch(endByDate(2000));




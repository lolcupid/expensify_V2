import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
    case 'DECREMENT':
      return {
        count: state.count - action.payload
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
})

const addCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    payload: incrementBy
  }
}

const minusCount = ({ decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    payload: decrementBy
  }
}

store.dispatch(addCount())
store.dispatch(addCount())
store.dispatch(addCount({ incrementBy: 10 }))
store.dispatch(minusCount({ decrementBy: 2 }))

store.dispatch({
  type: 'RESET'
})

console.log(store.getState())
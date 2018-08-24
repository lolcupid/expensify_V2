export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    payload: text
  }
}

export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

export const startByDate = (date) => {
  return {
    type: 'START_BY_DATE',
    payload: date
  }
}

export const endByDate = (date) => {
  return {
    type: 'END_BY_DATE',
    payload: date
  }
}

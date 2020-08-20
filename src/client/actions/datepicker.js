import * as ActionTypes from './types'

export const setStartDate = date => {
  return {
    type: ActionTypes.setStartDate,
    payload: date
  }
}

export const setEndDate = date => {
  return {
    type: ActionTypes.setEndDate,
    payload: date
  }
}

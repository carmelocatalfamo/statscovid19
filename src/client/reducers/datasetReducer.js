import { ActionTypes } from '../actions'

export default (state = {}, action) => {
  if (action.type === ActionTypes.fetchDatasetSucceeded) {
    return action.payload
  }

  return state
}

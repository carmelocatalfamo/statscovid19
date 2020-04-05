import * as ActionTypes from './types'

export const fetchDatasetSucceeded = dataset => {
  return {
    type: ActionTypes.fetchDatasetSucceeded,
    payload: dataset
  }
}

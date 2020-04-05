import { combineReducers } from 'redux'

import utilsReducer from './utilsReducer'
import datasetReducer from './datasetReducer'

export default combineReducers({
  env: (state = {}) => state,
  utils: utilsReducer,
  dataset: datasetReducer
})

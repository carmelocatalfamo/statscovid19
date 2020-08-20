import { combineReducers } from 'redux'

import utilsReducer from './utilsReducer'
import datasetReducer from './datasetReducer'
import datePickerReducer from './datePickerReducer'

export default combineReducers({
  env: (state = {}) => state,
  datePicker: datePickerReducer,
  utils: utilsReducer,
  dataset: datasetReducer
})

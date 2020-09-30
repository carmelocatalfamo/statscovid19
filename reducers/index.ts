import { combineReducers } from 'redux'

import { ThemeState, reducer as themeReducer } from './theme'
import { DatePickerState, reducer as datePickerReducer } from './datePicker'

export interface State {
  theme: ThemeState
  datePicker: DatePickerState
}

export const reducers = combineReducers({
  theme: themeReducer,
  datePicker: datePickerReducer
})

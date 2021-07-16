import { combineReducers } from '@reduxjs/toolkit'

import { reducer as uiReducer } from '@/store/slices/ui'
import { covidApi } from '@/store/services/covid'

export const reducers = combineReducers({
  [covidApi.reducerPath]: covidApi.reducer,
  ui: uiReducer
})

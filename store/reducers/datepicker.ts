import { createReducer } from '@reduxjs/toolkit'

import { moment } from '../../utils/moment'
import * as Actions from '../actions/datepicker'

export type DatepickerState = {
  startDate: string
  endDate: string
}

const INITIAL_STATE: DatepickerState = {
  startDate: moment().date(24).month(1).year(2020).toString(),
  endDate: moment().toString()
}

export default createReducer(INITIAL_STATE, builder => {
  builder.addCase(Actions.changeStartDate, (state, action) => ({
    ...state,
    startDate: action.payload
  }))

  builder.addCase(Actions.changeEndDate, (state, action) => ({
    ...state,
    endDate: action.payload
  }))
})

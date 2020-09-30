import { HYDRATE } from 'next-redux-wrapper'

import { ActionTypes, CHANGE_START_DATE, CHANGE_END_DATE } from '../actions/types'
import { moment } from '../utils/moment'

export type DatePickerState = {
  startDate: string | null
  endDate: string | null
}

const initialState = {
  startDate: moment().date(24).month(1).year(2020).toISOString(),
  endDate: moment().toISOString()
}

export const reducer = (state = initialState, action: ActionTypes): DatePickerState => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.datePicker

    case CHANGE_START_DATE:
      return { ...state, startDate: action.payload ? action.payload.toISOString() : null }

    case CHANGE_END_DATE:
      return { ...state, endDate: action.payload ? action.payload.toISOString() : null }

    default:
      return state
  }
}

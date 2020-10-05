import { HYDRATE } from 'next-redux-wrapper'

import { ActionTypes, CHANGE_START_DATE, CHANGE_END_DATE } from '../actions/types'
import { moment } from '../utils/moment'

export type DatePickerState = {
  startDate: string | null
  endDate: string | null
}

const initialState = {
  startDate: moment().date(24).month(1).year(2020).toString(),
  endDate: moment().toString()
}

export const reducer = (state = initialState, action: ActionTypes): DatePickerState => {
  switch (action.type) {
    case HYDRATE:
      console.log(action.payload.datePicker)
      return action.payload.datePicker

    case CHANGE_START_DATE:
      console.log('CHANGE_START_DATE', action.payload)
      return { ...state, startDate: action.payload ? action.payload.toString() : null }

    case CHANGE_END_DATE:
      console.log('CHANGE_END_DATE', action.payload)
      return { ...state, endDate: action.payload ? action.payload.toString() : null }

    default:
      return state
  }
}

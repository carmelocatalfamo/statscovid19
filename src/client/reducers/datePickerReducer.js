import { ActionTypes } from '../actions'
import moment from '../utils/moment'

const INITIAL_STATE = {
  startDate: moment().subtract(7, 'days'),
  endDate: moment()
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.setStartDate:
      return { ...state, startDate: action.payload }

    case ActionTypes.setEndDate:
      return { ...state, endDate: action.payload }

    default:
      return state
  }
}

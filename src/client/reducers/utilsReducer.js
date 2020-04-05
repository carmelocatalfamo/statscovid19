import { combineReducers } from 'redux'

import { ActionTypes } from '../actions'

export default combineReducers({
  appIsReady: (state = false, action) => {
    if (action.type === ActionTypes.appIsReady) {
      return action.payload
    }

    return state
  },

  theme: (state = 'light', action) => {
    if (action.type === ActionTypes.setTheme) {
      return action.payload
    }

    return state
  }
})

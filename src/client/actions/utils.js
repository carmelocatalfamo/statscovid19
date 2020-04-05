import * as ActionTypes from './types'

export const setAppIsReady = appIsReady => {
  return {
    type: ActionTypes.appIsReady,
    payload: appIsReady
  }
}

export const setTheme = theme => {
  return {
    type: ActionTypes.setTheme,
    payload: theme
  }
}

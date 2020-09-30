import { HYDRATE } from 'next-redux-wrapper'

import { Themes } from '../styles/themes/types'
import { ActionTypes, CHANGE_THEME } from '../actions/types'

export type ThemeState = Themes

export const reducer = (state: ThemeState = Themes.light, action: ActionTypes): ThemeState => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.theme

    case CHANGE_THEME:
      return action.payload

    default:
      return state
  }
}

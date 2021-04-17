import { useReducer, createContext, Dispatch } from 'react'
import nookies from 'nookies'

import { Theme } from '../models/Theme'

export const CHANGE_THEME = 'change_theme'
export const SHOW_MENU = 'show_menu'

type ChangeThemeAction = {
  type: typeof CHANGE_THEME
  payload: Theme
}

type ShowMenuAction = {
  type: typeof SHOW_MENU
  payload: boolean
}

type Action = ChangeThemeAction | ShowMenuAction

type State = {
  theme: Theme
  menu: boolean
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGE_THEME:
      // TODO: move nookies.set from here
      nookies.set(null, 'theme', action.payload, {})
      return { ...state, theme: action.payload }
    case SHOW_MENU:
      return { ...state, menu: action.payload }
    default:
      return state
  }
}

export const useStateReducer = (initialState?: State) => {
  const _initialState: State = {
    theme: initialState?.theme in Theme
      ? initialState.theme
      : Theme.light,
    menu: initialState?.menu || false
  }

  const [state, dispatch] = useReducer(reducer, _initialState)

  return {
    state,
    dispatch
  }
}

export const StateContext = createContext<
  { state: State, dispatch: Dispatch<Action> }
>(null)

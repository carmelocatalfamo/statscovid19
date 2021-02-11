import { useReducer, createContext } from 'react'
import nookies from 'nookies'

import { Theme } from '../models/Theme'

const CHANGE_THEME = 'change_theme'

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      nookies.set(null, 'theme', action.payload, {})
      return action.payload
    default:
      throw new Error()
  }
}

export const useThemeReducer = (initialTheme?: Theme) => {
  const initialState = initialTheme in Theme ? initialTheme : Theme.light
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    theme: state,
    changeTheme: (theme: Theme) => dispatch({ type: CHANGE_THEME, payload: theme })
  }
}

export const ThemeDispatch = createContext(null)

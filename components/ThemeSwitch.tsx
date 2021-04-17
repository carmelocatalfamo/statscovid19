import React, { useContext } from 'react'
import { useTheme } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

import { ButtonIcon } from './commons/ButtonIcon'
import { CHANGE_THEME, StateContext } from '../hooks/useState'
import { Theme } from '../models/Theme'

const ThemeSwitch = () => {
  const { theme } = useTheme()
  const { dispatch } = useContext(StateContext)
  const isDark = theme === Theme.dark

  const handleOnClick = () => {
    dispatch({
      type: CHANGE_THEME,
      payload: isDark ? Theme.light : Theme.dark
    })
  }

  return (
    <ButtonIcon
      title='Cambia tema'
      onClick={handleOnClick}
      icon={isDark ? FiSun : FiMoon}
    />
  )
}

export { ThemeSwitch }

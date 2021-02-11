import React, { useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

import { ThemeDispatch } from '../hooks/useThemeReducer'
import { Theme } from '../models/Theme'

const ThemeSwitch = () => {
  const { theme, colors } = useTheme()
  const changeTheme = useContext(ThemeDispatch)
  const isDark = theme === Theme.dark
  const size = 22
  const color = colors.text

  return (
    <Button onClick={() => changeTheme(isDark ? Theme.light : Theme.dark)}>
      {isDark
        ? <FiSun size={size} color={color} />
        : <FiMoon size={size} color={color} />
      }
    </Button>
  )
}

const Button = styled.button`
  height: 44px;
  width: 44px;
  padding: 0px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`

export { ThemeSwitch }

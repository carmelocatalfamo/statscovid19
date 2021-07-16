import React from 'react'
import { useTheme } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

import { ButtonIcon } from '@/components/commons/ButtonIcon'
import { Theme } from '@/models/Theme'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { changeTheme } from '@/store/slices/ui'

const ThemeSwitch = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const isDark = theme === Theme.dark
  const ThemeIcon = isDark ? FiSun : FiMoon

  const handleOnClick = () => {
    const newTheme = isDark ? Theme.light : Theme.dark
    dispatch(changeTheme(newTheme))
  }

  return (
    <ButtonIcon title='Cambia tema' onClick={handleOnClick} Icon={ThemeIcon} />
  )
}

export { ThemeSwitch }

import React, { FC } from 'react'
import Switch from 'react-switch'
import { useSelector, useDispatch } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled from 'styled-components'

import { changeTheme } from '../store/actions/theme'
import { setTheme } from '../utils/manageTheme'
import { State } from '../models/State'
import { Theme } from '../models/Theme'

const ThemeSwitch: FC = () => {
  const dispatch = useDispatch()
  const theme = useSelector<State, string>(state => state.theme)
  const isChecked = theme === Theme.light

  const handleChange = async () => {
    const newTheme = isChecked ? Theme.dark : Theme.light
    await setTheme(newTheme)
    dispatch(changeTheme(newTheme))
  }

  return (
    <Switch
      onChange={handleChange}
      checked={isChecked}
      onColor='#1BBC9B'
      offColor='#ECF0F1'
      uncheckedIcon={<UncheckedIcon />}
      checkedIcon={<CheckedIcon />}
      height={22}
      width={45}
    />
  )
}

const CheckedIcon = styled(FaSun)`
  margin-top: 3px;
  margin-left: 4px;
  color: #F5F9FC;
`

const UncheckedIcon = styled(FaMoon)`
  margin-top: 3px;
  margin-left: 4px;
  color: #17171d;
`

export { ThemeSwitch }

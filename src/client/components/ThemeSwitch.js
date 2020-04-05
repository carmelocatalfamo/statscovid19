import React from 'react'
import Switch from 'react-switch'
import { useSelector, useDispatch } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'

import { setTheme } from '../actions'

export default () => {
  const theme = useSelector(state => state.utils.theme)
  const dispatch = useDispatch()
  const isChecked = theme === 'light'

  const handleChange = () => {
    const newTheme = isChecked ? 'dark' : 'light'
    window.localStorage.setItem('theme', newTheme)
    dispatch(setTheme(newTheme))
  }

  const uncheckedIcon = <FaMoon style={{ marginTop: 3, marginLeft: 4, color: '#17171d' }} />
  const checkedIcon = <FaSun style={{ marginTop: 3, marginLeft: 4, color: '#F5F9FC' }} />

  return (
    <Switch
      onChange={handleChange}
      checked={isChecked}
      onColor='#1BBC9B'
      offColor='#ECF0F1'
      uncheckedIcon={uncheckedIcon}
      checkedIcon={checkedIcon}
      height={22}
      width={45}
    />
  )
}

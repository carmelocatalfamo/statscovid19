import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import themes from '../styles/themes'
import GlobalStyle from '../styles/GlobalStyle'

export default ({ children }) => {
  const theme = useSelector(state => state.utils.theme)
  const selectedTheme = themes[theme] || themes.light

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

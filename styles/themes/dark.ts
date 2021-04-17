import { DefaultTheme } from 'styled-components'

import { Theme } from '../../models/Theme'

const primary = '#713BDB'
const secondary = '#32D69F'
const danger = '#FC5080'

const theme: DefaultTheme = {
  theme: Theme.dark,
  breakpoint: {
    small: '@media (min-width: 570px)',
    large: '@media (min-width: 1200px)'
  },
  logo: [primary, secondary],
  colors: {
    primary,
    secondary,
    gradient1: '#49B8FF',
    gradient2: '#FF8B58',
    gradient3: danger,
    success: secondary,
    warning: '#F5D76E',
    danger,
    title: '#F5F6FA',
    text: '#A1A5B9',
    sidebar: '#2A2B32',
    navbar: '#2A2B32',
    content: '#202127'
  },
  fonts: {
    text: {
      family: "'Open Sans', sans-serif"
    }
  }
}

export { theme }

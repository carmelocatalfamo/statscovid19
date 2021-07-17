import { DefaultTheme } from 'styled-components'

import { breakpoints } from '@/styles/breakpoints'
import { Theme } from '@/models/Theme'

const primary = '#713BDB'
const secondary = '#32D69F'
const danger = '#FC5080'

const theme: DefaultTheme = {
  theme: Theme.light,
  breakpoint: {
    small: `@media (min-width: ${breakpoints.small}px)`,
    medium: `@media (min-width: ${breakpoints.medium}px)`,
    large: `@media (min-width: ${breakpoints.large}px)`
  },
  logo: [primary, secondary],
  loader: {
    background: '#f7f7f7',
    foreground: '#ecebeb'
  },
  colors: {
    primary,
    secondary,
    gradient1: '#49B8FF',
    gradient2: '#FF8B58',
    gradient3: danger,
    success: secondary,
    warning: '#F5D76E',
    danger,
    title: '#000',
    text: '#A1A5B9',
    sidebar: '#FEFEFE',
    navbar: '#fff',
    content: '#F5F6FA',
    white: '#FFF'
  },
  fonts: {
    text: {
      family: "'Open Sans', sans-serif"
    }
  }
}

export { theme }

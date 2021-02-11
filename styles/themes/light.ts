import { DefaultTheme } from 'styled-components'

import { Theme } from '../../models/Theme'

const primary = '#713BDB'
const secondary = '#32D69F'
const danger = '#FC5080'

const theme: DefaultTheme = {
  theme: Theme.light,
  logo: [primary, secondary],
  colors: {
    primary,
    secondary,
    gradient1: '#49B8FF',
    gradient2: '#FF8B58',
    gradient3: danger,
    success: secondary,
    danger,
    title: '#000',
    text: '#A1A5B9',
    sidebar: '#FEFEFE',
    navbar: '#fff',
    content: '#F5F6FA'
  },
  fonts: {
    text: {
      family: "'Open Sans', sans-serif"
    }
  }
}

export { theme }

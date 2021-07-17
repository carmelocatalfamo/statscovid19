import 'styled-components'

import { Theme } from '@/models/Theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      large: string
      medium: string
      small: string
    }
    colors: {
      content: string
      danger: string
      gradient1: string
      gradient2: string
      gradient3: string
      navbar: string
      primary: string
      secondary: string
      sidebar: string
      success: string
      text: string
      title: string
      warning: string
      white: string
    }
    fonts: {
      text: {
        family: string
      }
    }
    loader: {
      background: string
      foreground: string
    }
    logo: string[]
    theme: Theme
  }
}

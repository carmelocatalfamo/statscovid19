import 'styled-components'

import { Theme } from '@/models/Theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: Theme
    breakpoint: {
      small: string
      medium: string
      large: string
    }
    logo: string[]
    loader: {
      background: string
      foreground: string
    }
    colors: {
      primary: string
      secondary: string
      gradient1: string
      gradient2: string
      gradient3: string
      success: string
      warning: string
      danger: string
      title: string
      text: string
      sidebar: string
      navbar: string
      content: string
    }
    fonts: {
      text: {
        family: string
      }
    }
  }
}

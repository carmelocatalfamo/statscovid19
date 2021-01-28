import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    logo: string[]
    colors: {
      primary: string
    }
  }
}

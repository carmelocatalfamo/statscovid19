import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    logo: string[]
    map: {
      text: {
        size: number
        color: string
      }
      shades: string[]
    }
    select: {
      background: string
      color: string
      isSelectedColor: string
      isSelectedBackground: string
    }
    dates: {
      background: string
      color: string
      selectedDay: string
      selectedDayDark: string
    }
    button: {
      primary: {
        background: string
        color: string
        hover: string
      }
    }
    charts: {
      lines: string[]
      stroke: string
      axis: string
    }
    colors: {
      background: string
      backgroundDarker: string
      title: string
      text: string
      highlight: string
      success: string
    }
    fonts: {
      title: {
        color: string
        family: string
        weight: {
          bold: number
        }
      }
      text: {
        color: string
        family: string
        weight: {
          regular: number
        }
      }
    }
  }
}

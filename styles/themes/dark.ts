import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  logo: ['#EDF5E1', '#17171d', '#17171d'],
  map: {
    text: {
      size: 30,
      color: '#EDF5E1'
    },
    shades: ['#FFC398', '#FF9B54', '#FF7F51', '#CE4257', '#720026', '#4F000B']
  },
  select: {
    background: '#FF7F51',
    color: '#EDF5E1',
    isSelectedBackground: '#FF7F51',
    isSelectedColor: '#4F000B'
  },
  dates: {
    background: '#FF7F51',
    color: '#EDF5E1',
    selectedDay: '#CE4257',
    selectedDayDark: '#720026'
  },
  button: {
    primary: {
      background: '#CE4257',
      color: '#EDF5E1',
      hover: '#720026'
    }
  },
  charts: {
    lines: ['#CE4257', '#4F000B', '#FF7F51'],
    stroke: '#E2DBC0',
    axis: '#EDF5E1'
  },
  colors: {
    background: '#17171d',
    backgroundDarker: '#252429',
    title: '#EDF5E1',
    highlight: '#FF7F51',
    text: '#EDF5E1',
    success: '#009688'
  },
  fonts: {
    title: {
      color: '#FF7F51',
      family: "'Baloo Da 2', cursive",
      weight: {
        bold: 600
      }
    },
    text: {
      color: '#EDF5E1',
      family: "'Zilla Slab', serif",
      weight: {
        regular: 400
      }
    }
  }
}

export { theme }
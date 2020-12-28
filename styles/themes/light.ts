import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  logo: ['#4F000B', '#EDF5E1', '#EDF5E1'],
  map: {
    text: {
      size: 30,
      color: '#17171d'
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
    lines: ['#CE4257', '#4F000B', '#FF7F51', '#3f51b5', '#009688'],
    stroke: '#E2DBC0',
    axis: '#4F000B'
  },
  colors: {
    background: '#EDF5E1',
    backgroundDarker: '#E2DBC0',
    title: '#4F000B',
    highlight: '#FF7F51',
    text: '#4F000B',
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
      color: '#4F000B',
      family: "'Zilla Slab', serif",
      weight: {
        regular: 400
      }
    }
  }
}

export { theme }

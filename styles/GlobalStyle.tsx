import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts.text.family};
    width: 100%;
    height: 100%;
  }

  .recharts-text.recharts-label {
    fill: ${props => props.theme.fonts.text.color};
  }
`

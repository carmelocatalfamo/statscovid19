import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts.text.family};
    width: 100%;
    height: 100%;
  }

  .CalendarDay__selected_span {
    background: ${props => props.theme.colors.primaryLight};
    border: 1px double ${props => props.theme.colors.primaryLight};
    color: #fff;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${props => props.theme.colors.primary};
    border: 1px double ${props => props.theme.colors.primary};
    color: #fff;
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: #FF7CB8;
    border: 1px double #FF7CB8;
    color: #fff;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid ${props => props.theme.colors.primary};
  }
`

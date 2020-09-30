import { createGlobalStyle } from 'styled-components'

export const ReactDatesStyle = createGlobalStyle`
  .CalendarDay__selected_span {
    background: ${props => props.theme.colors.background};
    border: 1px double ${props => props.theme.colors.background};
    color: #fff;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${props => props.theme.colors.backgroundDarker};
    border: 1px double ${props => props.theme.colors.backgroundDarker};
    color: #fff;
  }

  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: #FF7CB8;
    border: 1px double #FF7CB8;
    color: #fff;
  }

  .DayPicker {
    background-color: ${props => props.theme.dates.background};
  }

  .CalendarMonthGrid,
  .CalendarMonth {
    background-color: transparent;
  }

  .DayPicker_weekHeader {
    color: ${props => props.theme.dates.color};
    top: 57px;
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.title.family};
    font-size: 16px;
  }

  .CalendarMonth_caption {
    color: ${props => props.theme.dates.color};
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.title.family};
    font-size: 16px;
  }

  .DateRangePickerInput {
    background-color: ${props => props.theme.dates.background};
    border-radius: 30px;
    border: 0px;
  }

  .CalendarDay {
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.title.family};
    font-size: 16px;
  }

  .CalendarDay__default {
    color: ${props => props.theme.dates.color};
    border: 1px solid ${props => props.theme.dates.color};
    background: transparent;

    &:hover {
      background: ${props => props.theme.dates.color};
      border: 1px solid ${props => props.theme.dates.color};
      color: ${props => props.theme.dates.background};
    }
  }

  .CalendarDay__selected_span {
    background: ${props => props.theme.dates.selectedDay};
    border: 1px double ${props => props.theme.dates.color};
    color: ${props => props.theme.dates.color};
  }

  .CalendarDay__selected {
    background: ${props => props.theme.dates.selectedDayDark};
    border: 1px double #FFBCD8;
    color: #fff;
  }

  .CalendarDay__blocked_out_of_range {
    opacity: 0.2;

    &:hover {
      opacity: 0.2;
    }
  }

  .DateInput {
    background-color: transparent;
    width: 110px;
  }

  .DateInput_input {
    background-color: transparent;
    color: ${props => props.theme.dates.color};
    font-family: ${props => props.theme.fonts.title.family};
    font-size: 16px;
    border-bottom: 0px;
    padding: 8px 9px 6px;

    &.DateInput_input__focused {
      border-bottom: 0px;
    }
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .DayPickerNavigation_button__default {
    background-color: ${props => props.theme.dates.color};
    border: 0px;
    outline: none;

    &:hover {
      border: 0px;
    }
  }

  .DayPickerNavigation_svg__horizontal {
    fill: ${props => props.theme.dates.background};
  }

  .DateRangePickerInput_arrow_svg {
    fill: ${props => props.theme.dates.color};
  }

  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid ${props => props.theme.colors.backgroundDarker};
  }
`

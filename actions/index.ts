import { moment } from '../utils/moment'
import { Themes } from '../styles/themes/types'
import {
  CHANGE_THEME, ChangeThemeAction,
  CHANGE_START_DATE, ChangeStartDateAction,
  CHANGE_END_DATE, ChangeEndDateAction
} from './types'

export const changeTheme = (theme: Themes): ChangeThemeAction => ({
  type: CHANGE_THEME,
  payload: theme
})

export const changeStartDate = (date: moment.Moment | null): ChangeStartDateAction => ({
  type: CHANGE_START_DATE,
  payload: date
})

export const changeEndDate = (date: moment.Moment | null): ChangeEndDateAction => ({
  type: CHANGE_END_DATE,
  payload: date
})

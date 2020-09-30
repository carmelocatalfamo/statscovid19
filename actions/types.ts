import { HYDRATE } from 'next-redux-wrapper'

import { Themes } from '../styles/themes/types'
import { moment } from '../utils/moment'

/**
 * Change theme.
 */

export const CHANGE_THEME = 'CHANGE_THEME'

export interface ChangeThemeAction {
  type: typeof CHANGE_THEME
  payload: Themes
}

/**
 * Change datePicker start date.
 */

export const CHANGE_START_DATE = 'CHANGE_START_DATE'

export interface ChangeStartDateAction {
  type: typeof CHANGE_START_DATE
  payload: moment.Moment | null
}

/**
 * Change datePicker start date.
 */

export const CHANGE_END_DATE = 'CHANGE_END_DATE'

export interface ChangeEndDateAction {
  type: typeof CHANGE_END_DATE
  payload: moment.Moment | null
}

/**
 * Hydrate redux store.
 */

export interface HydrateAction {
  type: typeof HYDRATE
  payload: any
}

export type ActionTypes =
  ChangeThemeAction |
  ChangeStartDateAction |
  ChangeEndDateAction |
  HydrateAction

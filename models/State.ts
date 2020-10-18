import { DatepickerState } from '../store/reducers/datepicker'
import { ThemeState } from '../store/reducers/theme'

export interface State {
  theme: ThemeState
  datepicker: DatepickerState
}

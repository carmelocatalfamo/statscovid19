import { createReducer } from '@reduxjs/toolkit'

import { Theme } from '../../models/Theme'
import * as Actions from '../actions/theme'
import { hydrateAction } from '../actions'

export type ThemeState = Theme

export default createReducer(Theme.light, builder => {
  builder.addCase(hydrateAction, (_state, action) => action.payload.theme)
  builder.addCase(Actions.changeTheme, (_state, action) => action.payload)
})

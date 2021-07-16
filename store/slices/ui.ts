import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import nookies from 'nookies'

import { Theme } from '@/models/Theme'

type UiState = {
  menuIsVisible: boolean
  theme: Theme
}

const initialState: UiState = {
  menuIsVisible: false,
  theme: Theme.light
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.ui.theme) {
        state.theme = action.payload.ui.theme
      }
    }
  },
  reducers: {
    changeMenuIsVisible: (state, action: PayloadAction<boolean>) => {
      state.menuIsVisible = action.payload
    },
    changeTheme: {
      reducer: (state, action: PayloadAction<Theme>) => {
        state.theme = action.payload
      },
      prepare: (theme: Theme) => {
        nookies.set(null, 'theme', theme, { path: '/' })
        return { payload: theme }
      }
    }
  }
})

export const { changeTheme, changeMenuIsVisible } = uiSlice.actions
export const reducer = uiSlice.reducer

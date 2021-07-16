import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { reducers } from '@/store/reducers'
import { middleware } from '@/store/middleware'

export const makeStore = () =>
  configureStore({
    middleware,
    reducer: reducers
  })

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)

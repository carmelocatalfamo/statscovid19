import { configureStore } from '@reduxjs/toolkit'
import { MakeStore, createWrapper } from 'next-redux-wrapper'

import reducers from './reducers'
import { State } from '../models/State'

const makeStore: MakeStore<State> = () => {
  return configureStore<State>({
    reducer: reducers,
    devTools: process.env.NODE_ENV === 'development'
  })
}

export const wrapper = createWrapper<State>(makeStore, {
  debug: false
})

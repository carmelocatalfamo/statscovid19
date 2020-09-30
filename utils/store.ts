import { createStore } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'

import { reducers, State } from '../reducers'

const makeStore: MakeStore<State> = (_context: Context) => createStore(
  reducers,
  process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
)

export const wrapper = createWrapper<State>(makeStore, {
  debug: process.env.NODE_ENV === 'development'
})

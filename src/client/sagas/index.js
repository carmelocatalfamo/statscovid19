import { call, put } from 'redux-saga/effects'

import { fetchData } from './fetchDataSaga'
import { setAppIsReady, fetchDatasetSucceeded, setTheme } from '../actions'

export default function * root () {
  const theme = window.localStorage.getItem('theme') || 'light'
  yield put(setTheme(theme))

  const data = yield call(fetchData)
  yield put(fetchDatasetSucceeded(data))

  yield put(setAppIsReady(true))
}

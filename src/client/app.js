import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import store from './store'
import Routes from './Routes'
import history from './store/history'
import Theme from './components/Theme'
import ScrollToTop from './components/ScrollToTop'

export default () => {
  return (
    <Provider store={store}>
      <Router history={history} forceRefresh={false}>
        <Theme>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Theme>
      </Router>
    </Provider>
  )
}

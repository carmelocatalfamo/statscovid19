import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Region from './pages/Region'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default () => {
  const appIsReady = useSelector(state => state.utils.appIsReady)

  if (!appIsReady) return null

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/privacy' component={Privacy} />
      <Route exact path='/:region' component={Region} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  )
}

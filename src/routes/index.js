import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import Home from 'views/Home'
import About from 'views/About'

export default (
  <Route component={ CoreLayout }>
    <Route path='/' component={ HomeView }>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Route>
);

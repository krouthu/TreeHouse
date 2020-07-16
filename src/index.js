import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Home from './pages/Home'
import Details from './pages/Details'
import RentersListing from './pages/RentersListing'
import Login from './pages/ReactLogin/src'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Home default />
    <Details path="/details/:propertyId" />
    <RentersListing path="/renters" />
    <Login path="/login" />
  </Router>,
  rootElement
)
//Note "propertyId refers to both id for property and renters profile. This is done for conveinance sakes..."
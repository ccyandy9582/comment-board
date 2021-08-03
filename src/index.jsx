import React from "react"
import ReactDOM from "react-dom"
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

ReactDOM.render(
  <HashRouter>
    {renderRoutes(routes)}
  </HashRouter>,
  document.getElementById("app")
)
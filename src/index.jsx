import React from "react"
import ReactDOM from "react-dom"
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { Container } from "react-bootstrap"
import Footer from './components/footer'
import Header from './components/Header'

React.createContext({item: []})

ReactDOM.render(
  <HashRouter>
    <Container>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </Container>
  </HashRouter>,
  document.getElementById("app")
)
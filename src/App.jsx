import React from 'react'
import 'normalize.css'
import Home from './components/pages/Home'
import Header from './components/header/Header'
import Why from './components/pages/why/Why'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/why" component={Why}></Route>
        </Switch>
      </Router>
      {/* <Header/>
      <Home/> */}
    </>
  )
}

export default App

import React from "react"
import 'normalize.css'
import Home from "./components/pages/home/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Who from "./components/pages/who/Who"
// import Why from "./components/pages/why/Why"
import How from "./components/pages/how/How"
import What from "./components/pages/what/What"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/who" component={Who}></Route>
          <Route exact path="/what" component={What}></Route>
          <Route exact path="/why" component={Why}></Route>
          <Route exact path="/how" component={How}></Route>
          <Home />
        </Switch>
        <Footer />
      </Router> */}
      <Header/>
      <Home/>
      <What/>
      <Who/>
      {/* <Why/> */}
      <How/>
      <Footer/>
    </>
  )
}

export default App;
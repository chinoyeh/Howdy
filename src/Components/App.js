import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Finances from './Finances';
import Home from './Home'
import Login from './Login'
import Productivity from './Productivity';
import Worry from './Worry'
import Health from './Health';
// import './App.css'

const App = () => {
    return (
        <div >
         <Router>
    <Switch>
  <Route exact path='/'>
    <Login />
  </Route>
  <Route path='/Home'>
    <Home/>
  </Route>
  <Route path='/Productivity'>
    <Productivity/>
  </Route>
  <Route path='/Finances'>
    <Finances/>
  </Route>
  <Route path='/Worry'>
    <Worry/>
  </Route>
  <Route path='/Health'>
    <Health/>
  </Route>
</Switch>
  </Router>
        </div>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
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
</Switch>
  </Router>
        </div>
    )
}

export default App

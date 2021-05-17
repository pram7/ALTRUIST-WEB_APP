import React from 'react';
import './App.css';
import "./website.css";
import './bootstrap.min.css';
// import "font-awesome/css/font-awesome.min.css";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chats';
import GetInTouch from './pages/GetInTouch';
import Ngo from './pages/Ngo';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Login' exact component={Login}/>
        <Route path='/Profile' exact component={Profile}/>
        <Route path='/Chats' exact component={Chat}/>
        <Route path='/Ngo' exact component={Ngo}/>
        <Route path='/GetInTouch' exact component={GetInTouch}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

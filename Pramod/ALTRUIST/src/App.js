// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "./firebase";
// import { login, logout } from "./features/userSlice";
// import { selectUser } from "./features/userSlice";
import React from "react";
import "./App.css";
//import Chat from "./Chat";
import Chatlogin from "./Chatlogin";
import Sidebar from "./Sidebar";
import Login from "./pages/Login.js";


import "./website.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';
import Ngo from './pages/Ngo';

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // the user is logged in
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           email: authUser.email,
  //           displayName: authUser.displayName,
  //         })
  //       );
  //     } else {
  //       // the user is logged out
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  return (


    
    <div className="app">

<Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Login' exact component={Login}/>
        {/* <Route path='/Chats' exact component={Chat}/> */}
        <Route path='/Chatlogin' exact component={Chatlogin}/>
        <Route path='/Ngo' exact component={Ngo}/>
        <Route path='/GetInTouch' exact component={GetInTouch}/>
      </Switch>
    </Router>

      {/* {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )} */}
    </div>
  );
}

export default App;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar.js";
import Login from "./pages/Login.js";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import Chat from "./Chat";
import "./Chatlogin.css";


function Chatlogin() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

    return (
        <div className="chatlogin">
            {user ? (
        <>
          <div class = "sidebar"><Sidebar /></div>
          <div class = "chat"><Chat /></div>
        </>
      ) : (
        <Login />
      )}
        </div>
    )
}

export default Chatlogin

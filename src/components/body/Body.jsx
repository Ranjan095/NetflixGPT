import React, { useEffect } from "react";
import Header from "../header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../login/Login";
import Browse from "../browse/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../ReduxToolkit/users/userSlice";
import Error from "../error/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Browse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const Body = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid, email, displayName,photoURL }));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

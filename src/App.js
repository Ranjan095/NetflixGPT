import { useDispatch } from "react-redux";
import AppRoutes from "./components/allRoutes/AppRoutes";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase/firebase";
import { addUser, removeUser } from "./ReduxToolkit/users/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;

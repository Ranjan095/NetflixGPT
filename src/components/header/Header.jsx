import React from "react";
import logo from "../../utils/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  let user = useSelector((store) => store.user);

 

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div className="z-10 sticky flex justify-between w-screen absolute px-[5%]  bg-gradient-to-b from-gray-500 to-white">
      <div className=" ">
        <img className="w-44 left-[170px]" src={logo} alt="logo" />
      </div>
      {user && (
        <div className=" flex items-center space-x-2">
          <img className="w-12 rounded-full" src={user?.photoURL} alt="user-pic" />
          <button
            onClick={handleLogout}
            className="font-bold hover:text-red-700"
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

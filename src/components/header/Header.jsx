import React from "react";
import logo from "../../utils/images/logo.png";
const Header = () => {
  return (
    <div className="w-[200px] absolute left-[170px] top-2 bg-gradient-to-b rounded-lg z-10">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;

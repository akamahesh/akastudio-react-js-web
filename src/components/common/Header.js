import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        akaStudio
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        about us
      </NavLink>
      {" | "}
      <NavLink to="/work" activeStyle={activeStyle}>
        work with us
      </NavLink>
    </nav>
  );
};

export default Header;

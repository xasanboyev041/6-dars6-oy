import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="wrapper-nav">
        <li>
          <NavLink className="wrapper-nav-li" end to="/register">
            Register
          </NavLink>
        </li>

        <li>
          <NavLink className="wrapper-nav-li" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

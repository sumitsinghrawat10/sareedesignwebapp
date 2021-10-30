import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./styles";
import './style.css';


const Navbar = () => {
 
  return (
    <>
      <Nav >
        {/* <NavLink to="/">
          <img src={require("../../images/logo.svg")} alt="logo" />
        </NavLink> */}
        <Bars />
        <NavMenu  >
        
          <NavLink to="/about" activeStyle 
          className="main-dev"
          activeClassName="main-dev-active">
            About
          </NavLink>
          <NavLink to="/services" activeStyle className="main-dev"
          activeClassName="main-dev-active">
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle className="main-dev"
          activeClassName="main-dev-active">
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle  className="main-dev"
          activeClassName="main-dev-active">
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
      <div>

        </div>
    </>
  );
};

export default Navbar;

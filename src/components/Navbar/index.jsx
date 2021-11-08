// import React from "react";
// import { Nav, NavLink, Bars, NavMenu } from "./styles";
// import './style.css';


// const Navbar = () => {
 
//   return (
//     <>
//       <Nav >
//         {/* <NavLink to="/">
//           <img src={require("../../images/logo.svg")} alt="logo" />
//         </NavLink> */}
//         <Bars />
//         <NavMenu  >
        
//           <NavLink to="/about" activeStyle 
//           className="main-dev"
//           activeClassName="main-dev-active">
//             About
//           </NavLink>
//           <NavLink to="/services" activeStyle className="main-dev"
//           activeClassName="main-dev-active">
//             Services
//           </NavLink>
//           <NavLink to="/contact-us" activeStyle className="main-dev"
//           activeClassName="main-dev-active">
//             Contact Us
//           </NavLink>
//           <NavLink to="/sign-up" activeStyle  className="main-dev"
//           activeClassName="main-dev-active">
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         {/* <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn> */}
//       </Nav>
//       <div>

//         </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import './style.css';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="title" >
          <h2>
          <span>F</span>ashion
            <span>F</span>reak
            
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/"
              activeStyle 
                        className="btn"
                        activeClassName="btn-active"
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle 
                        className="btn"
                        activeClassName="btn-active">about</NavLink>
            </li>
            <li>
              <NavLink to="/service" activeStyle 
                        className="btn"
                        activeClassName="btn-active">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle 
                        className="btn"
                        activeClassName="btn-active">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        {/* <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div> */}
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;

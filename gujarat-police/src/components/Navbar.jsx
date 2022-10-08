import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
// import "../../../gujarat-police/public/images/policesym.png"\

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const navigate = useNavigate();
  const history = useNavigate();

  const userlogout = () =>{
    localStorage.removeItem("user_login")
    history("/");
  }

  return (
    <div className="cont">
      <nav className="navbar">
        <NavLink to="/">
          <img
            className="logo"
            src="../../Gujarat_Police_Logo.png"
            alt="Gujarat Police"
          ></img>
        </NavLink>
        <ul
          className={menuIcon ? "navlinksMobile" : "navlinks"}
          onClick={() => {
            setMenuIcon(false);
          }}
        >
          <NavLink to="/" className="liItems" activeclass="active">
            <li>DashBoard</li>
          </NavLink>
          <NavLink to="/report" className="liItems" activeclass="active">
            <li>Report</li>
          </NavLink>
          <NavLink to="/qrGenerator" className="liItems" activeclass="active">
            <li>QR Code Generator</li>
          </NavLink>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Create User</a>
              <a href="#">Change Password</a>
              <a href="#" onClick={userlogout}>Log Out</a>
            </div>
          </div>
        </ul>
        <button className="btn" onClick={() => setMenuIcon(!menuIcon)}>
          {menuIcon ? <ImCross size={25} /> : <GiHamburgerMenu size={25} />}
        </button>
      </nav>
    </div>
  );
}

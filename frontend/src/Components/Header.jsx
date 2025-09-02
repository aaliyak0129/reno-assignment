import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";   // import CSS

const Header = () => {
  return (
   <> <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
   
          <h2>School Management</h2>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-school" className={({ isActive }) => (isActive ? "active" : "")}>
                Add School
              </NavLink>
            </li>
            <li>
              <NavLink to="/show-schools" className={({ isActive }) => (isActive ? "active" : "")}>
                Show Schools
              </NavLink>
            </li>
          </ul>
        </nav>

      
        <button className="join-btn">Join Us ➜</button>
      </div>

      {/* Wavy Bottom Border */}
      <div className="wave"></div>
    </header>
</>  );
};

export default Header;

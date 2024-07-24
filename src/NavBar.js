import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import menu from "./icons/menu.svg";
import close from "./icons/close.svg";
import zimaTravels from "./Logo/Zima Log png.png";
import "./NavBar.css";
import { Home } from "./Home";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img id="logo" src={zimaTravels} alt="logo" />
      </NavLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <img className="icons" src={menu} />
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <img className="icons" src={close} />
        </label>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="packages">Packages</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </div>
    </nav>
  );
};

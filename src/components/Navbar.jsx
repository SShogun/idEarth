import React from "react";
import "../App.css";
import PrimaryButton from "./PrimaryButton";
import { NavLink } from "react-router-dom";
import logo from "../images/logo2_bg.png";
export default function Navbar() {
  return (
    <nav>
      <div className="navLogo">
        <img src={logo} height={150} />
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <NavLink exact to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" className="link">
              Research
            </NavLink>
          </li>
          <li>
            <PrimaryButton>News Letter</PrimaryButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}

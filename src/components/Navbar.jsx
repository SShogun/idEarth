import React from "react";
import "../App.css";

import PrimaryButton from "./PrimaryButton";
export default function Navbar() {
  return (
    <nav>
      <div className="navText">
        <p className="navTitle dm-sans-500">idEarth</p>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Research</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <PrimaryButton>More</PrimaryButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}

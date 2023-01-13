import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">Tejodeep</div>
      </div>
      
      <div className="n-right">
        <Toggle/>
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
         </div>
        
      </div>
    </div>
  );
};

export default Navbar;

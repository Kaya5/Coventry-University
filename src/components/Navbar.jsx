import React from "react";
import "../styles/Navbar.css";
function Navbar(props) {
  return (
    <div>
      <navbar>
        <div className="navbar-item">
          <a className="nav-link" href="/about">
            About
          </a> 
        </div>
        <div className="navbar-item">
          <a className="nav-link" href="/company">
            Company
          </a>
        </div>
        <div className="navbar-item">
          <a className="nav-link" href="/objectives">
            Objectives
          </a>
        </div>
        <div className="navbar-item">
          <a className="nav-link" href="/references">
            References
          </a>
        </div>
        <div className="navbar-item">
          <a className="nav-link" href="/report">
            Report
          </a>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;

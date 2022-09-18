import React from "react";
import { Link } from "react-router-dom";
import KUANG_JESSICA from "./../images/KUANG_JESSICA.pdf";
import "./../style/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left-container">
          <img
            className="apple-icon"
            src={require("./../images/watermelon.png")}
          ></img>
          <p className="navbar-name">jessica kuang</p>
        </div>
        <div className="nav-right-container">
          <Link to="/" className="site-title">
            home
          </Link>
          {/* <Link to="/" className="site-title"> */}
          <a className="site-title" href={KUANG_JESSICA}>
            resume
          </a>
          {/* </Link> */}
        </div>
      </nav>
    </div>
  );
}

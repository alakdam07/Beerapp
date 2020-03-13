import React from "react";
import logo from "./img/logo.png";

export default function Nav() {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3 nav">
        <div>
          <img src={logo} className="brand-logo center logo" alt="img" />
        </div>
      </nav>
    </div>
  );
}

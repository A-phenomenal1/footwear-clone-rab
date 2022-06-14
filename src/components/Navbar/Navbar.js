import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-header">
      <div className="nav-topbar">
        <div className="nav-title">
          <h1>Footwear</h1>
        </div>
        <div className="nav-searchbar"></div>
      </div>
      <div className="nav-bottombar">
        <div className="nav-menuitems"></div>
        <div className="nav-cartitems"></div>
      </div>
    </div>
  );
}

export default Navbar;

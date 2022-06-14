import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-header">
      <div className="nav-topbar">
        <div className="nav-title">
          <h1>Footwear</h1>
        </div>
        <div className="nav-searchbar">
          <input value="" placeholder="Search" />
          <div className="nav-searchicon-cont">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="nav-bottombar">
        <ul>
          <li className="nav-item">
            <a>Home</a>
          </li>
          <li className="nav-item">
            <a>Men</a>
          </li>
          <li className="nav-item">
            <a>Women</a>
          </li>
          <li className="nav-item">
            <a>About</a>
          </li>
          <li className="nav-item">
            <a>Contact</a>
          </li>
        </ul>
        <div className="nav-cartitems">
          <ShoppingCartIcon />
          <span>Cart [0]</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

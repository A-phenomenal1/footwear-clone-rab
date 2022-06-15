import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";

export function SubNavbar() {
  const [count, setCount] = useState(0);
  console.log("SubNavBar Component rerender.");

  const Taglines = [
    "25% off (Almost) Everything use! use code summer shoes",
    "Our Biggest sale is yet 50% off all summer shoes",
  ];

  const increaseCount = () => {
    let a = count + 1;
    setCount(a);
  };

  return (
    <div className="sn-container">
      <div className="sn-text">
        <h1>{Taglines[0]}</h1>
      </div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export function Navbar() {
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

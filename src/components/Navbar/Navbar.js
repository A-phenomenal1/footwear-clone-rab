import React, { useEffect, useRef, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";

export function SubNavbar() {
  const [index, setIndex] = useState(0);

  const Taglines = [
    "25% off (Almost) Everything use! use code summer shoes",
    "Our Biggest sale is yet 50% off all summer shoes",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % Taglines.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  // const increaseCount = () => {
  //   let a = count + 1;
  //   setCount(a);
  // };

  return (
    <div className="sn-container">
      <div className="sn-text">
        <h1>{Taglines[index]}</h1>
      </div>
    </div>
  );
}

export function Navbar() {
  // const [searchText, setSearchText] = useState("abc");

  const searchText = useRef("");
  console.log("searchText: ", searchText);

  return (
    <div className="nav-header">
      <div className="nav-topbar">
        <div className="nav-title">
          <h1>Footwear</h1>
        </div>
        <div className="nav-searchbar">
          <input
            value={searchText.Current}
            onChange={(e) => (searchText.Current = e.target.value)}
            placeholder="Search"
          />
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

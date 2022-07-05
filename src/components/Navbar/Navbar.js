import React, { useEffect, useRef, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Dropdown from "../dropdown/Dropdown";
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

export function Navbar(props) {
  const searchText = useRef("");
  console.log(props.cartCount);

  const menItems = [
    "Sports Shoes",
    "Sneakers",
    "Scandals",
    "Slippers",
    "Flip Flops",
  ];

  const womenItems = ["Sports Shoes", "Sneakers", "Scandals"];

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
            <div className="nav-dropdown">
              <Dropdown dropDown={menItems} />
            </div>
          </li>
          <li className="nav-item">
            <a>Women</a>
            <div className="nav-dropdown">
              <Dropdown dropDown={womenItems} />
            </div>
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
          <span>Cart [{props.cartCount}]</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "./Dropdown.css";

function Dropdown() {
  const dropdownItems = [
    "Product Details",
    "Shopping Cart",
    "Checkout",
    // "Order Complete",
    "Wishlist",
  ];
  return (
    <div className="dd-cont">
      <ArrowDropUpIcon className="dd-top-arrow" />
      <div className="dd-items">
        {dropdownItems.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default Dropdown;

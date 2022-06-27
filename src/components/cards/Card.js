import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-cont">
      <div className="card-img">
        <img src={props.item.img} alt=" card-img" />
      </div>
      <div className="card-info-cont">
        <h2>Women's boots shoes </h2>
        <h2>Maca</h2>
        <h3>$139.00</h3>
      </div>
    </div>
  );
}

export default Card;

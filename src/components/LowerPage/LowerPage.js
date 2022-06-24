import React from "react";
import "./LowerPage.css";

export function Intro() {
  return (
    <div className="intro-cont">
      <p>
        It started with a simple idea: Create quality, well-designed products
        that I wanted myself.
      </p>
    </div>
  );
}

export function ProductIntro(props) {
  return (
    <div className="pi-container">
      <img src={props.product.src} alt="product-image" />
      <div className="pi-title">
        <h1>{props.product.title}</h1>
      </div>
    </div>
  );
}

export function ProductSection(props) {
  return (
    <div className="products">
      {props.productType.map((product, i) => {
        return <ProductIntro key={i} product={product} />;
      })}
    </div>
  );
}

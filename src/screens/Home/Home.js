import React from "react";

import Components from "../../components";
import items from "../../assets/items";
import "./Home.css";

function Home() {
  const productType = [
    {
      src: "https://technext.github.io/footwear/images/men.jpg",
      title: "Shop Men's Collection",
    },
    {
      src: "https://technext.github.io/footwear/images/women.jpg",
      title: "Shop Women's Collection",
    },
  ];

  return (
    <div>
      <Components.Navbar />
      <Components.SubNavbar />
      <Components.Carousel />
      <Components.Intro />
      <Components.ProductSection productType={productType} />
      <div className="prod-cont">
        <h1>Best Sellers</h1>
        <div className="prod-items">
          {items.map((item, i) => {
            return <Components.Card item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

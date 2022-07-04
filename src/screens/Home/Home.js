import React from "react";

import Components from "../../components";
import items from "../../assets/items";
import "./Home.css";

function Home(props) {
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

  const trustedPartners = [
    {
      img: "https://technext.github.io/footwear/images/brand-1.jpg",
      altKey: "Adidas",
      name: "Adidas",
    },
    {
      img: "https://technext.github.io/footwear/images/brand-2.jpg",
      altKey: "Nike",
      name: "Nike",
    },
    {
      img: "https://technext.github.io/footwear/images/brand-3.jpg",
      altKey: "Gucci",
      name: "Gucci",
    },
    {
      img: "https://technext.github.io/footwear/images/brand-4.jpg",
      altKey: "Merrell",
      name: "Merrell",
    },
    {
      img: "https://technext.github.io/footwear/images/brand-5.jpg",
      altKey: "puma",
      name: "puma",
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
            return (
              <Components.Card
                item={item}
                key={item.id}
                isPresent={props.cartItems.find(
                  (cartItem) => item.id === cartItem.id
                )}
                updateCart={(item) =>
                  props.updateCart([...props.updateCart, item])
                }
              />
            );
          })}
        </div>
        <button>See All Products</button>
      </div>
      <div className="tp-cont">
        <h1>Trusted Partners</h1>
        <div className="tp-items">
          {trustedPartners.map((item, i) => {
            return <img src={item.img} alt={item.altKey} />;
          })}
        </div>
      </div>
      <Components.Footer />
    </div>
  );
}

export default Home;

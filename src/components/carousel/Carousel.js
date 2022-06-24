import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselItem } from "react-responsive-carousel";

import "./Carousel.css";

function Carousel() {
  const carouselItems = [
    {
      imgSrc: "https://technext.github.io/footwear/images/img_bg_1.jpg",
      title: "Mens",
      subtitle1: "Shoes",
      title2: "Collection",
      subtitle2: "New Trending Shoes",
      btnText: "Shop Collection",
    },
    {
      imgSrc: "https://technext.github.io/footwear/images/img_bg_2.jpg",
      title: "Huge",
      subtitle1: "Sale",
      title2: "50% Off",
      subtitle2: "Big Sale sandals",
      btnText: "Shop Collection",
    },
    {
      imgSrc: "https://technext.github.io/footwear/images/img_bg_3.jpg",
      title: "Mens",
      subtitle1: "Shoes",
      title2: "Collection",
      subtitle2: "New Trending Shoes",
      btnText: "Shop Collection",
    },
  ];
  return (
    <CarouselItem
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      {carouselItems.map((item, i) => {
        return (
          <div className="cr-container" key={i}>
            <img src={item.imgSrc} />
            <div className="cr-content">
              <h1>{item.title}</h1>
              <h3>{item.subtitle1}</h3>
              <h2>{item.title2}</h2>
              <h4>{item.subtitle2}</h4>
              <button>{item.btnText}</button>
            </div>
          </div>
        );
      })}
    </CarouselItem>
  );
}

export default Carousel;

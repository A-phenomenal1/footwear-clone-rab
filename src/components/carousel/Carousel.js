import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselItem } from "react-responsive-carousel";

function Carousel() {
  return (
    <div className="car-cont">
      <CarouselItem>
        <div>
          <img src="https://technext.github.io/footwear/images/img_bg_1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://technext.github.io/footwear/images/img_bg_2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://technext.github.io/footwear/images/img_bg_3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </CarouselItem>
    </div>
  );
}

export default Carousel;

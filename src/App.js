import React, { useEffect, useState } from "react";

import "./App.css";

import Screens from "./screens";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 5,
      img: "https://technext.github.io/footwear/images/item-6.jpg",
      title: "Women's boots shoes",
      brand: "Maca",
      price: "$139.00",
    },
  ]);

  useEffect(() => {
    console.log("cartItems: ", cartItems);
  }, [cartItems]);

  return (
    <div className="App">
      <Screens.Home
        cartItems={cartItems}
        updateCart={(cart) => setCartItems(cart)}
      />
    </div>
  );
}

export default App;

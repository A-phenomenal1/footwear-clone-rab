import React, { useEffect, useState } from "react";

import "./App.css";

import Screens from "./screens";

function App() {
  const [cartItems, setCartItems] = useState([]);

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

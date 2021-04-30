import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  //states
  const [cartIsShown, setCartIsShown] = useState(false);

  //handlers
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // component
  return (
    <CartProvider>
      {cartIsShown ? <Cart onClose={hideCartHandler} /> : ""}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider> // end of fragment
  );
}

export default App;

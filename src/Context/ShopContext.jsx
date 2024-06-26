import React, { createContext, useState } from "react";
import all_product from "../../src/data/all_product";

export const ShopContext = createContext(null);
const contextValue = { all_product };

const getDefaltCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaltCart());
  const contextValue = { all_product, cartItems };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

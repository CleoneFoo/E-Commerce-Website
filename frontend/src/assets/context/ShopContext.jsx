import { createContext } from "react";
import { products } from "../frontend_assets/assets";

export const ShopContext = createContext(); // Invoke createContext here

const ShopContextProvider = (props) => {
  const currency = "RM";
  const delivery_fee = 10;

  const value = { products, currency, delivery_fee };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

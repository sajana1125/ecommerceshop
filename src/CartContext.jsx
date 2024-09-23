import { Action } from "@remix-run/router";
import { createContext, useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return { cartlist: [...state.cartlist, action.payload] };
    case "remove":
      return {
        cartlist: state.cartlist.filter((a) => a.id !== action.payload.id),
      };
  }
};

var CartContext = createContext();
export function CartProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, { cartlist: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

import { createSelector } from "reselect";

import { RootState } from "../store";

import { CartState } from "./cart.reducer";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * Number(cartItem.price),
    0
  )
);

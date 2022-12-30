import { memo } from "react";

import { CartItemContainer, ItemDetailes } from "./cart-item.styles";

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <ItemDetailes>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailes>
    </CartItemContainer>
  );
});

export default CartItem;

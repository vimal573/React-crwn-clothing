import { CartItemContainer, ItemDetailes } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetailes>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailes>
    </CartItemContainer>
  );
};

export default CartItem;

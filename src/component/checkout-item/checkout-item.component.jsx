import { useContext } from "react";

import { CartContext } from "../contexts/cart.context";

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearCartHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={clearCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

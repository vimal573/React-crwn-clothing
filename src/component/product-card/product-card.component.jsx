import { useContext } from "react";

import { CartContext } from "../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./product-card.styles";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        children="ADD TO CART"
        onClick={addProductToCart}
      />
    </ProductCardContainer>
  );
};

export default ProductCard;

import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="proice">{price}</span>
      </div>
      <Button buttonType="inverted" children="ADD TO CART" />
    </div>
  );
};

export default ProductCard;

import "./category-items.style.scss";

const CategoryItem = ({ title, imgUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directries-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imgUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;

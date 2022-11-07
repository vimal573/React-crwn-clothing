import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../component/categories-preview/categories.preview.componenet";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

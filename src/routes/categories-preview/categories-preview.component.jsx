import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../component/category-preview/category-preview.component";
import Spinner from "../../component/spinner/spinner.component";

import {
  selectCategoriesIsCartLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsCartLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;

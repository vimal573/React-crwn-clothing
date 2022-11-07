import { createContext, useEffect, useState } from "react";

import {
  addCollectionsAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.utills";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoriesMap);
    };

    return () => getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
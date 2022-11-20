import { CATEGORY_ACTION_TYPES } from "./category.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoriesArray);

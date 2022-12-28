import { Key } from "react";

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: Key;
  imageUrl: String;
  name: String;
  price: Number;
};

export type Category = {
  title: String;
  imageUrl: String;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: Key]: CategoryItem[];
};

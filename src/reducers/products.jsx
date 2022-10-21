import { FETCH_ALL, FETCH_CATEGORIES } from "../constants/actionTypes";
const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    default:
      return state;
  }
};

const productCategories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};
export { productReducer, productCategories };

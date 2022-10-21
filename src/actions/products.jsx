import * as api from "../api";
import { FETCH_ALL, FETCH_CATEGORIES } from "../constants/actionTypes";
//Action creators
const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const getProductCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsCategories();
    dispatch({ type: FETCH_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export { getProducts, getProductCategories };

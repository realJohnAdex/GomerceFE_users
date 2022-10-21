import axios from "axios";

// using fake store API as mockup data
const url = "https://fakestoreapi.com/products/";

const fetchProducts = () => axios.get(`${url}${"?limit=6"}`);
const fetchProductsCategories = () => axios.get(`${url}${"categories"}`);

export { fetchProducts, fetchProductsCategories };

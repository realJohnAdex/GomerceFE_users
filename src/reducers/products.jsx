const productReducer = (products = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_SPECIFIC":
      return products;

    case "FETCH_ONE":
      return products;

    default:
      return products;
  }
};

export default productReducer;

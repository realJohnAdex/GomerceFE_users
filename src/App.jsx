import { BrowserRouter } from "react-router-dom";
import Views from "./Views/Views";
import AppContainer from "./components/AppContainer/AppContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import { getProducts, getProductCategories } from "./actions/products";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Wrapper>
          <Views />
        </Wrapper>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;

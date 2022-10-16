import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import productReducer from "./reducers/products";
const store = configureStore(
  { reducer: { productReducer } },
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

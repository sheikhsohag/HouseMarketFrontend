import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { productsReducer } from "./productSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,  // single product reducer
  },
});

export default store;

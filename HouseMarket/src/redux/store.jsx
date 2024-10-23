import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { productsReducer } from "./productSlice";
import { profileReducer } from "./productSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,  // single product reducer
    profile: profileReducer,
  },
});

export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get("/api/products/");
  return res.data;
});

// Fetch a single product by ID
export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
  const res = await axios.get(`/api/product/${id}`);
  return res.data;
});

// Products slice
const productsSlice = createSlice({
  name: "Products",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

// Product slice (for single product)
const productSlice = createSlice({
  name: "Product",
  initialState: {
    isLoading: false,
    product: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.product = {};
      state.error = action.error.message;
    });
  },
});

export { productsSlice, productSlice };

// Exporting reducers
export const productsReducer = productsSlice.reducer;
export const productReducer = productSlice.reducer;

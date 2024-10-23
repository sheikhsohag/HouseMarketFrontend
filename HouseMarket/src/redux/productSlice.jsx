import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken } from "../constants/Token";
import { act } from "react";

const token = localStorage.getItem('access_token');




const fetchAccessToken = async () => {
  const tokenData = await getAccessToken();
  return tokenData ? tokenData.access : null;
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get("/api/products/");
  return res.data;
});

// Fetch a single product by ID

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
  const res = await axios.get(`/api/product/${id}`);
  return res.data;
});

// user profile



export const fetchProfile = createAsyncThunk("profile/fetchProfile", async ()=>{
  const res = await axios.get(`/api/user/profile/`, {headers: {
    Authorization: `Bearer ${token}`
  }});
  return res.data
})


// update profile

export const updateProfile = createAsyncThunk('profile/updateProfile', async (updatedProfile) => {
  console.log("updated = ", updatedProfile)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await axios.patch('/api/user/profile/update/', updatedProfile, config);
  return response.data;
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


// Profile Slice
const ProfileSlice = createSlice({
  name: "profile",

  initialState: {
    isLoading: false,
    profile: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
      state.error = null;
    });

    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.profile = null;
      state.error = action.error.message;
    });

    builder.addCase(updateProfile.pending, (state)=>{
      state.isLoading = true;
    });

    builder.addCase(updateProfile.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.profile = action.payload;
    });

    builder.addCase(updateProfile.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});





export { productsSlice, productSlice, ProfileSlice };

// Exporting reducers
export const productsReducer = productsSlice.reducer;
export const productReducer = productSlice.reducer;
export const profileReducer = ProfileSlice.reducer;

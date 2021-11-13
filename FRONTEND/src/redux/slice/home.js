import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularFood: [],
  newFood: [],
  sellFood: [],
  foodShow: [],
  currentFilter: "bestseller",
  isLogin: false,
  dataReceipt: [],
  currentReceipt: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    actionGetTop: (state, action) => {
      state.loading = true;
    },
    actionGetTopSuccess: (state, action) => {
      state.newFood = action.payload.topNew;
      state.popularFood = action.payload.popular;
      state.sellFood = action.payload.seller;
      state.foodShow = action.payload.seller;
    },
    actioneSetHomeFilter: (state, action) => {
      state.currentFilter = action.payload.filter;
      state.foodShow = action.payload.food;
      console.log("ac", action.payload);
    },
    actionSetLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    actionGetReceipt: (state, action) => {},
    actionGetReceiptSuccess: (state, action) => {
      state.dataReceipt = action.payload;
    },
    actionSetCurrentReceipt: (state, action) => {
      state.currentReceipt = action.payload;
    },
  },
});

//action
export const {
  actionGetTop,
  actionGetTopSuccess,
  actioneSetHomeFilter,
  actionSetLogin,
  actionGetReceipt,
  actionGetReceiptSuccess,
  actionSetCurrentReceipt,
} = homeSlice.actions;

//selector
export const getNew = (state) => state.home.newFood;
export const getBestSell = (state) => state.home.sellFood;
export const getPopular = (state) => state.home.popularFood;
export const getFoodShow = (state) => state.home.foodShow;
export const getHomeCurrentFilter = (state) => state.home.currentFilter;
export const checkLogin = (state) => state.home.isLogin;
export const getReceipt = (state) => state.home.dataReceipt;
export const getCurrentReceipt = (state) => state.home.currentReceipt;
//reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;

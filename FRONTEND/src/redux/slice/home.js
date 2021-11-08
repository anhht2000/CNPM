import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularFood: [],
  newFood: [],
  sellFood: [],
  foodShow: [],
  currentFilter: "bestseller",
  isLogin: false,
  // currentHomeFilter:''
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
  },
});

//action
export const { actionGetTop, actionGetTopSuccess, actioneSetHomeFilter, actionSetLogin } = homeSlice.actions;

//selector
export const getNew = (state) => state.home.newFood;
export const getBestSell = (state) => state.home.sellFood;
export const getPopular = (state) => state.home.popularFood;
export const getFoodShow = (state) => state.home.foodShow;
export const getHomeCurrentFilter = (state) => state.home.currentFilter;
export const checkLogin = (state) => state.home.isLogin;
//reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;

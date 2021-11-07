import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
  category: [],
  currentPage: 1,
  totalPage: 1,
  currentFilter: "",
  filter: {
    price: "",
    date: "",
  },
  currentFood: {},
  numberCart: 0,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    actionGetFood: (state, action) => {
      state.loading = true;
    },
    actionGetFoodSuccess: (state, action) => {
      state.loading = false;
      state.foods = action.payload.content;
      state.currentPage = action.payload.number + 1;
      state.totalPage = action.payload.totalPages;
    },
    actionGetCater: (state) => {
      state.loading = true;
    },
    actionGetCaterSuccess: (state, action) => {
      state.loading = false;
      state.category = action.payload;
    },
    actionSetFilter: (state, action) => {
      state.currentFilter = action.payload;
      state.filter = {
        price: "",
        date: "",
      };
    },
    actionSearch: (state, action) => {
      state.currentFilter = "";
      state.filter = {
        price: "",
        date: "",
      };
    },
    actionSetCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
      state.filter = {
        price: "",
        date: "",
      };
    },
    actionSetFilterAll: (state, action) => {
      state.filter = action.payload;
    },
    actionSetCurrentFood: (state, action) => {
      state.currentFood = action.payload;
    },
    actionSetNumberCart: (state, action) => {
      state.numberCart = action.payload;
    },
  },
});

//action
export const {
  actionGetFood,
  actionGetFoodSuccess,
  actionGetCater,
  actionGetCaterSuccess,
  actionSetFilter,
  actionSearch,
  actionSetCurrentPage,
  actionSetFilterAll,
  actionSetCurrentFood,
  actionSetNumberCart,
} = foodSlice.actions;

//selector
export const getCurrentPage = (state) => state.food.currentPage;
export const getTotalPage = (state) => state.food.totalPage;
export const getAllFood = (state) => state.food.foods;
export const getCategory = (state) => state.food.category;
export const getCurrentFilter = (state) => state.food.currentFilter;
export const getFilter = (state) => state.food.filter;
export const getCurrentFood = (state) => state.food.currentFood;
export const getNumberCart = (state) => state.food.numberCart;
//reducer
const foodReducer = foodSlice.reducer;
export default foodReducer;

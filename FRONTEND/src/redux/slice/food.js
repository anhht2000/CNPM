import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
  category: [],
  currentPage: 1,
  totalPage: 1,
  currentFilter: "",
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
      state.category = action.payload;
    },
    actionSetFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

//action
export const { actionGetFood, actionGetFoodSuccess, actionGetCater, actionGetCaterSuccess, actionSetFilter } =
  foodSlice.actions;

//selector
export const getCurrentPage = (state) => state.food.currentPage;
export const getAllFood = (state) => state.food.foods;
export const getCategory = (state) => state.food.category;
export const getCurrentFilter = (state) => state.food.currentFilter;
//reducer
const foodReducer = foodSlice.reducer;
export default foodReducer;

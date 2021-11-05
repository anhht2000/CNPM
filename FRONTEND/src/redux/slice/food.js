import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
  category: [],
  currentPage: 1,
  totalPage: 1,
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
  },
});

//action
export const { actionGetFood, actionGetFoodSuccess, actionGetCater, actionGetCaterSuccess } = foodSlice.actions;

//selector
export const getCurrentPage = (state) => state.food.currentPage;
export const getAllFood = (state) => state.food.foods;
export const getCategory = (state) => state.food.category;
//reducer
const foodReducer = foodSlice.reducer;
export default foodReducer;

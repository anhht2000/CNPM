import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  foods: [],
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
  },
});

//action
export const { actionGetFood, actionGetFoodSuccess } = foodSlice.actions;

//selector
export const getCurrentPage = (state) => state.food.currentPage;
export const getAllFood = (state) => state.food.foods;
//reducer
const foodReducer = foodSlice.reducer;
export default foodReducer;

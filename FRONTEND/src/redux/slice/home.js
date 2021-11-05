import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularFood: [],
  newFood: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    actionGetTop: (state, action) => {
      state.loading = true;
    },
    actionGetTopSuccess: (state, action) => {
      // state.newFood=action.payload.
    },
  },
});

//action
export const { actionGetTop, actionGetTopSuccess } = homeSlice.actions;

//selector
export const getCurrentPage = (state) => state.food.currentPage;
// export const getAllFood = (state) => state.food.foods;
// export const getCategory = (state) => state.food.category;
//reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;

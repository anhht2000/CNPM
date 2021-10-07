import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    actionGet: (state, action) => {
      state.loading = true;
    },
  },
});

const appReducer = appSlice.reducer;
export default appReducer;

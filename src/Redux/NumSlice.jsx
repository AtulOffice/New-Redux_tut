import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autoCounter: 0,
  userCounter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.autoCounter += 1;
    },
    decrement: (state) => {
      state.autoCounter -= 1;
    },
    incrementByUserValue: (state, action) => {
      state.userCounter += action.payload;
    },
    decrementByUserValue: (state, action) => {
      state.userCounter -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByUserValue,
  decrementByUserValue,
} = counterSlice.actions;

export default counterSlice.reducer;

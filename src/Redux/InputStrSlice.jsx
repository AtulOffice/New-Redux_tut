import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: "",
};

const stringSlice = createSlice({
  name: "Stringput",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});
export const { setUserInput } = stringSlice.actions;

export default stringSlice.reducer;

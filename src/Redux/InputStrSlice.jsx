import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputStr: [],
};

const stringSlice = createSlice({
  name: "stringput",
  initialState,
  reducers: {
    addUserInput: (state, action) => {
      state.inputStr.push(action.payload);
    },
    removeUserInput: (state, action) => {
      state.inputStr = state.inputStr.filter((str) => str !== action.payload);
    },
    clearUserInput: (state) => {
      state.inputStr = [];
    },
    editUserInput: (state, action) => {
      const { oldNote, newNote } = action.payload;
      const index = state.inputStr.indexOf(oldNote);
      if (index !== -1) {
        state.inputStr[index] = newNote;
      }
    },
  },
});

export const { addUserInput, removeUserInput, clearUserInput,editUserInput } =
  stringSlice.actions;

export default stringSlice.reducer;

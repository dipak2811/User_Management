import { createSlice } from "@reduxjs/toolkit";

const initial = {
  data: {},
};

const Adduser = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    add: (state, action) => {
      state.data = action.payload;
      console.log(action);
    },
    remove: (state) => {
      state.data = {};
    },
  },
});

export const { add, remove } = Adduser.actions;

export default Adduser.reducer;

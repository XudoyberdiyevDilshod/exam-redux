import { createSlice } from "@reduxjs/toolkit";

const userSlise = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    handleAddUser: (state, action) => {
      state.user = action.payload;
    },
    handleRemoveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { handleAddUser, handleRemoveUser } = userSlise.actions;
export default userSlise.reducer;

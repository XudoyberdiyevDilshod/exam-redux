import { createSlice } from "@reduxjs/toolkit";

const tokenSlise = createSlice({
  name: 'token',
  initialState:
  {
    token: "",
    
  }
  ,
  reducers: {
    handleAddToken:(state,action) => {
      state.token = action.payload
    },
    handleRemoveToken:(state,action) => {
      state.token = action.payload
    },
}});


export const { handleAddToken, handleRemoveToken } = tokenSlise.actions;
export default tokenSlise.reducer;
import { configureStore } from "@reduxjs/toolkit";
import cartSlise from "./cartSlice";
import likeSlice from "./likeSlice";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlise,
    like: likeSlice,
    token: tokenSlice,
    user: userSlice,
  },
});

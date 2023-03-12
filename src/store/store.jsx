import { configureStore } from "@reduxjs/toolkit";
import korzinkaSlise from './korzinkaSlice';
import sevimliSlice from "./sevimliSlice";



export const store2 = configureStore({
  reducer: {
    korzinka: korzinkaSlise,
    sevimli: sevimliSlice,
  }
})
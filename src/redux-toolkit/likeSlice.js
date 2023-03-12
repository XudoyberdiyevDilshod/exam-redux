import { createSlice } from "@reduxjs/toolkit";
import Rohat_oil from "./images/Rohat-oil.png";
import Rohat_Juice from "./images/Rohat-juice.png";
import Mehrigiyo from "./images/Mehrigiyo.png";
import Rohat_oil_men from "./images/Rohat-oil-men.png";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    like: [],
    products: [
      {
        id: 1,
        img: Rohat_oil,
        name: "ROHAT Yog`i №2",
        type: "Mavjud",
        oldPrice: "17,190, uzs",
        price: 16000,
        quantity: 1,
        isLiked: false,
      },
      {
        id: 2,
        img: Rohat_Juice,
        name: "Rohat Sirop",
        type: "Erkaklar kuchi",
        oldPrice: "200,190, uzs",
        price: 150000,
        quantity: 1,
        isLiked: false,
      },
      {
        id: 3,
        img: Mehrigiyo,
        name: "Organic Bananas",
        type: "7pcs, Price",
        oldPrice: "17,190, uzs",
        price: 16000,
        quantity: 1,
        isLiked: false,
      },
      {
        id: 4,
        img: Rohat_oil_men,
        name: "ROHAT Yog`i №22",
        type: "Mavjud",
        oldPrice: "17,190, uzs",
        price: 16000,
        quantity: 1,
        isLiked: false,
      },
      {
        id: 5,
        img: Mehrigiyo,
        name: "Rohat Sirop",
        type: "Rohat Sirop",
        oldPrice: "200,190, uzs",
        price: 150000,
        quantity: 1,
        isLiked: false,
      },
    ],
  },
  reducers: {
    handleDeleteLike: (state, action) => {
      state.like = state.like.filter((item) => item.id !== action.payload);
    },

    handleAddLike: (state, action) => {
      const findedItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      const foundProductsIndex = state.like.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (foundProductsIndex == -1) {
        state.like = [...state.like, findedItem];
      }
    },
    changeHeartColor: (state, action) => {
      const findedItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      const findedItem2 = state.like.find(
        (item) => item.id === action.payload.id
      );
      findedItem.isLiked = !findedItem.isLiked;
      findedItem2.isLiked = !findedItem2.isLiked;
    },
    handleIncrementLike: (state, action) => {
      const findedItem = state.cart.find((item) => item.id === action.payload);
      findedItem.quantity += 1;
    },
    handleDecrementLike: (state, action) => {
      const findedItem = state.cart.find((item) => item.id === action.payload);
      if (findedItem.quantity > 1) {
        findedItem.quantity -= 1;
      }
    },
    sortedIsLiked: (state, action) => {
      state.products[action.payload.id - 1].isLiked =
        !state.products[action.payload.id - 1].isLiked;
    },
  },
});

export const {
  handleAddLike,
  handleDeleteLike,
  changeHeartColor,
  handleIncrementLike,
  handleDecrementLike,
  sortedIsLiked,
} = likeSlice.actions;
export default likeSlice.reducer;

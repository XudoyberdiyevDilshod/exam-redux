import { createSlice } from "@reduxjs/toolkit";
import Rohat_oil from "./images/Rohat-oil.png";
import Rohat_Juice from "./images/Rohat-juice.png";
import Mehrigiyo from "./images/Mehrigiyo.png";
import Rohat_oil_men from "./images/Rohat-oil-men.png";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
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
    handleAddCart: (state, action) => {
      const findedItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      const foundProductsIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (foundProductsIndex == -1) {
        state.cart = [...state.cart, findedItem];
      }
    },
    handleDeleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    handleIncrement: (state, action) => {
      const findedItem = state.cart.find((item) => item.id === action.payload);
      findedItem.quantity += 1;
      const findedItem2 = state.products.find(
        (item) => item.id === action.payload
      );
      findedItem2.quantity += 1;
    },
    handleDecrement: (state, action) => {
      const findedItem = state.cart.find((item) => item.id === action.payload);
      if (findedItem.quantity > 1) {
        findedItem.quantity -= 1;
      }
      const findedItem2 = state.products.find(
        (item) => item.id === action.payload
      );
      if (findedItem2.quantity > 1) {
        findedItem2.quantity -= 1;
      }
    },
  },
});

export const {
  handleAddCart,
  handleDeleteCart,
  handleIncrement,
  handleDecrement,
} = cartSlice.actions;
export default cartSlice.reducer;

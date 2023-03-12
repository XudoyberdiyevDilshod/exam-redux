import { createContext } from "react";
import { useState } from "react";

export const ProductsContext = createContext();

const us_products = [
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
  {
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    oldPrice: "17,190, uzs",
    price: "16 000 uzs",
    isLiked: false,
    img: "",
  },
];

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(us_products);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

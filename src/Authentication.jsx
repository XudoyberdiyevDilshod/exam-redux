import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/products";
import { Cart } from "./pages/Cart/Cart";
import { Like } from "./pages/Like/Like";

function Authentication() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/products" element={<Product />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Authentication;

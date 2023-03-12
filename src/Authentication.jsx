import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Productes } from "./pages/Productes/productes";
import { Cart } from "./pages/Cart/Cart";
import { Like } from "./pages/Like/Like";
import { NotFound } from "./pages/404/NotFound";

function Authentication() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Productes />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Authentication;

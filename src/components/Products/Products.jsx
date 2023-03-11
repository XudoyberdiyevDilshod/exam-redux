import { Link } from "react-router-dom";
import "./Products.css";
import img from "./images/bg-img-village.jpg";

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="products__heading">
            <h2 className="products__title">Mahsulotlarimiz ro'yxati</h2>
          </div>
          {/* <ul>Mahsulotlar</ul> */}
          <Link to={"products"} className="products__link">
            Barcha mahsulotlarni ko’rish
          </Link>
        </div>
        <aside className="aside">
          <img src={img} alt="village" width="1256" height="300" />
          <h2 className="aside__title">
            Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
          </h2>
        </aside>
      </div>
    </section>
  );
};

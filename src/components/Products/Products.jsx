import { Link } from "react-router-dom";
import "./Products.css";
import img from "./images/bg-img-village.jpg";
import { useSelector } from "react-redux";
import { Product } from "./Product";

export const Products = () => {
  const { products } = useSelector((state) => state.like);

  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="products__heading">
            <h2 className="products__title">Mahsulotlarimiz ro'yxati</h2>
          </div>
          {products.length ? (
            <ul className="wrapp">
              {products.map((item) => (
                <Product
                  isLiked={item.isLiked}
                  key={item.id}
                  id={item.id}
                  src={item.img}
                  name={item.name}
                  type={item.type}
                  oldPrice={item.oldPrice}
                  price={item.price}
                />
              ))}
            </ul>
          ) : (
            ""
          )}
          <Link to={"products"} className="products__link">
            Barcha mahsulotlarni ko’rish
          </Link>
        </div>
        <article className="article">
          <img src={img} alt="village" width="1256" height="300" />
          <h2 className="article__title">
            Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
          </h2>
        </article>
      </div>
    </section>
  );
};

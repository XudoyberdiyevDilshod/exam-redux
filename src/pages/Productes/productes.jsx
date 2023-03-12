import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../components/Products/Product";
import "./productes.css";

export const Productes = () => {
  const { products } = useSelector((state) => state.like);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container ">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="my-4">Mahsulotlar</h2>
          <label className="search-label">
            <input
              className="search-input"
              type="text"
              placeholder="Qidirish"
              onInput={(e) => dispatch(search(e.target.value))}
            />
          </label>
        </div>
        <div className="d-flex align-items-start gap-4">
          <div className="category-wrapper">
            <div className="d-flex justify-content-between">
              <h4 className="category">Kategoriyalar</h4>
              <p>Tozalash</p>
            </div>
            <form>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Hammasi
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Choy
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Asal
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Yog’
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Non
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Ziravorlar
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Sharbatlar
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Lolipoplar
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="category" />
                Tabletkalar
              </label>
            </form>
          </div>
          {products.length ? (
            <ul
              className="d-flex flex-wrap gap-4 list-unstyled "
              style={{ width: "892px" }}
            >
              {products.map((item) => (
                <Product
                  quantity={item.quantity}
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
        </div>
      </div>
    </>
  );
};

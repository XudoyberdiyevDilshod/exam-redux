import {
  handleDecrement,
  handleDeleteCart,
  handleIncrement,
} from "../../redux-toolkit/cartSlice";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import DeleteBtnCart from "./images/DeleteCart.svg";
import Empty_Box from "./images/Empty_Box.svg";
import { Minus, Plus } from "./images/count-img";

export const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  const cartArray = cart.map((item) => item.price * item.quantity);

  const countAll = cartArray.reduce((acc, value) => acc + value, 0);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between my-5 ">
        {cart.length ? (
          <h2>Savatchada {cart.length} ta mahsulot bor</h2>
        ) : (
          <h2>Savatcha</h2>
        )}
        <Link
          style={{ color: "#181725" }}
          className="buyurtma-history-btn"
          to="/history"
        >
          Buyurtmalar tarixi
        </Link>
      </div>
      {cart.length ? (
        <>
          <div className="d-flex align-items-start justify-content-between">
            <div className="savatcha-item">
              {cart.length ? (
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="d-flex align-items-center justify-content-between savatcha-card mb-3"
                    >
                      <img src={item.img} width={90} height={90} />
                      <div>
                        <p className="medicine-name">{item.name}</p>
                        <p className="m-0">{item.type}</p>
                      </div>
                      <div className="d-flex align-items-center ">
                        <button
                          onClick={() => dispatch(handleDecrement(item.id))}
                          className="plus-btn"
                        >
                          <Minus />
                        </button>
                        <p className="count-tablet">{item.quantity}</p>
                        <button
                          onClick={() => dispatch(handleIncrement(item.id))}
                          className="plus-btn"
                        >
                          <Plus />
                        </button>
                      </div>
                      <div className="">
                        <p className="old-price">{item.oldPrice}</p>
                        <p className="new-price">{item.price} uzs</p>
                      </div>
                      <button
                        onClick={() => dispatch(handleDeleteCart(item.id))}
                        type="button"
                        className="plus-btn"
                      >
                        <img src={DeleteBtnCart} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>

            <div className="common-balance" style={{ marginBottom: "441px" }}>
              <ul className="m-0 list-unstyled mb-4">
                <li className="d-flex justify-content-between">
                  <p>Mahsulotlar({cart.length})</p>
                  <p>{countAll}</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p>Chegirma</p>
                  <p>0</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p>Yetkazib berish</p>
                  <p>15 000</p>
                </li>
                <li className="d-flex justify-content-between">
                  <b>Umumiy</b>
                  <b>{countAll + 15000} so'm</b>
                </li>
              </ul>
              <Link
                to="/tolov"
                className="common-btn"
                style={{ color: "#FFF", marginBottom: "16px" }}
              >
                To’lovga o’tish
              </Link>
              <Link
                to="/mahsulotlar"
                className="common-btn common-btn2"
                style={{ color: "#181725" }}
              >
                Menyuga qaytish
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="savatcha-not">
          <img
            className="d-block mx-auto"
            src={Empty_Box}
            alt="Empty Box Page"
            width="300"
            height="200"
          />
        </div>
      )}
    </div>
  );
};

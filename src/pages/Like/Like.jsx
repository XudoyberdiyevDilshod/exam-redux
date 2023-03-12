import React from "react";
import DeleteBtnCart from "./images/DeleteCart.svg";
import { useDispatch, useSelector } from "react-redux";
import PlusCart from "./images/PlusBtn.svg";
import { handleDeleteLike, sortedIsLiked } from "../../redux-toolkit/likeSlice";
import { handleAddCart } from "../../redux-toolkit/cartSlice";
import "./like.css";
import Empty_Box from "./images/Empty_Box.svg";


export const Like = () => {
  const dispatch = useDispatch();

  const { like } = useSelector((state) => state.like);

  const filteredArray = like.filter((item) => item.isLiked === true);

  const myFunction = (id) => {
    dispatch(sortedIsLiked({ id: id }));
    dispatch(handleDeleteLike(id));
  };

  return (
    <div className="container" style={{ marginBottom: "120px" }}>
      <h2 className="my-5">Sevimli dorilar</h2>

      {like.length > 0 ? (
        <ul className="m-0 list-unstyled w-100">
          {filteredArray.length ? (
            filteredArray.map((item) => (
              <li
                key={item.id}
                className="d-flex align-items-center justify-content-between savatcha-cardsss  mb-3 "
              >
                <img src={item.img} height={100} />
                <div>
                  <p className="medicine-name">{item.name}</p>
                  <p className="m-0">{item.type}</p>
                </div>
                <div className="d-flex align-items-center ">
                  <button
                    type="button"
                    onClick={() => dispatch(handleAddCart({ id: item.id }))}
                    className="plus-btn"
                  >
                    <img src={PlusCart} alt="plus button" />
                  </button>
                </div>
                <div className="">
                  <p className="old-price">{item.oldPrice}</p>
                  <p className="new-price">{item.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => myFunction(item.id, item.isLiked)}
                  className="plus-btn"
                >
                  <img src={DeleteBtnCart} alt="delete like cart" />
                </button>
              </li>
            ))
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
        </ul>
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

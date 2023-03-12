import React from "react";
import { useDispatch } from "react-redux";
import "./Products.css";
import dislike from "./images/dislike-btn.svg";
import like from "./images/like.svg";
import Plus from "./images/Plus.svg";
import { handleAddCart } from "../../redux-toolkit/cartSlice";
import { changeHeartColor, handleAddLike } from "../../redux-toolkit/likeSlice";
import BasicModal from "../Modal/ModalBox";

export const Product = ({
  quantity,
  isLiked,
  id,
  src,
  name,
  type,
  oldPrice,
  price,
}) => {
  const dispatch = useDispatch();

  const changeHeart = (id) => {
    dispatch(changeHeartColor({ id: id }));
  };

  const myFunction = (id) => {
    dispatch(handleAddLike({ id: id }));
    changeHeart(id);
  };

  return (
    <li>
      <div className="product-card">
        <div>
          <div className="d-flex gap-1">
            <img width={175} height={175} src={src} />
            <button
              type="button"
              onClick={() => myFunction(id, isLiked)}
              className="heart-btn"
            >
              <img width={25} height={22} src={`${isLiked ? like : dislike}`} />
            </button>
          </div>
          <p>{isLiked}</p>
          <p className="product-name">{name}</p>
          <p className="product-type">{type}</p>
          <div className="product-us">
            <div>
              <p className="product-old-price">{oldPrice}</p>
              <p className="product-new-price">{price}</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(handleAddCart({ id: id }))}
                className="plus-btn"
              >
                <img src={Plus} alt="plus button" />
              </button>
            </div>
          </div>
          <BasicModal />
        </div>
      </div>
    </li>
  );
};

import React, { useState } from "react";
import { Minus, Plus, Star, Star_middle } from "./images/images";
import "./ModalBox.css";
import { Accordion } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddCart,
  handleDecrement,
  handleIncrement,
} from "../../redux-toolkit/cartSlice";

export const ModalCart = ({ id, name, price, src }) => {
  const dispatch = useDispatch();

  const cartProd = useSelector((state) => state.cart.products);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const myFunction = (id) => {
    dispatch(handleAddCart({ id: id }));
    setShow(false);
  };

  const myFunction2 = (id) => {
    dispatch(handleAddCart({ id: id }));
    dispatch(handleIncrement(id));
  };

  return (
    <>
      <button className="mb-2 tafsilot" onClick={() => handleShow(true)}>
        Tafsilotlar→
      </button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-wrapper d-flex align-items-center">
            <img src={src} alt="" />
            <div>
              <h2 className="mt-5">{name}</h2>
              <div className="d-flex align-items-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star_middle />
                <span className="ms-2 mt-1">4.7</span>
              </div>
              <div className="d-flex align-items-center justify-content-between my-4">
                <div className="d-flex align-items-center gap-1">
                  <button
                    onClick={() => dispatch(handleDecrement(id))}
                    className="plus-btn"
                  >
                    <Minus />
                  </button>
                  <p className="dori-soni">{korProd[id - 1].quantity}</p>
                  <button onClick={() => myFunction2(id)} className="plus-btn">
                    <Plus />
                  </button>
                </div>
                <p className="new-price">{price}</p>
              </div>
              <div>
                <div style={{ width: "563px" }}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Mahsulot haqida</Accordion.Header>
                      <Accordion.Body>
                        Xalq tabobatida jigar uchun foydalidir, hazm qilishni
                        yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini
                        normallantiradi, qonni tozalaydi, semizlikni oldini
                        oladi
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <p>Og'irligi</p>
                <p>100gr</p>
              </div>
              <button
                type="button"
                onClick={() => myFunction(id)}
                className="savat-add"
              >
                Savatga qo'shish
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

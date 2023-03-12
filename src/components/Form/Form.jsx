import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

import flag from "./images/uzb-flag.svg";

export const Form = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const textRef = useRef();

  const dispatch = useDispatch();

  const myFunction = (evt) => {
    evt.preventDefault();
    const values = {
      user_name: userNameRef.current.value,
      user_email: emailRef.current.value,
      user_tel: telRef.current.value,
      question: textRef.current.value,
    };

    userNameRef.current.value = "";
    emailRef.current.value = "";
    telRef.current.value = "";
    textRef.current.value = "";
  };
  return (
    <section className="form">
      <div className="container">
        <div className="form-inner">
          <span style={{ color: "#53B175" }}>Biz bilan bog'lanish</span>
          <h2 className="site-form__title">So'rovingizni yuboring</h2>
          <form onSubmit={myFunction} className="site-forms">
            <input
              ref={userNameRef}
              className="form-name-input"
              type="text"
              placeholder="Ismingizni kiriting..."
            />
            <input
              ref={emailRef}
              className="form-name-input"
              type="email"
              placeholder="Emailingizni kiriting..."
            />
            <label className="form-tel-label">
              Telefon raqam
              <div>
                <img src={flag} />
                <p className="d-inline-block nomer">+998</p>
                <input
                  ref={telRef}
                  className="form-tel-input"
                  type="number"
                  defaultValue="+998"
                />
              </div>
            </label>
            <input ref={textRef} type="text" className="form-name-input" />
            <button type="submit" className="form-btn">
              Xabar yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import exit from "./images/exit.svg";
import Eye from "./Eye.svg";
import "./Register.css";

function Register() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const token = {
      user_name: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    localStorage.setItem("token", JSON.stringify(token));
    navigate("/");
    location.reload();
  };

  const handleEyeOpen = () => {
    if (passwordRef.current.type == "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  return (
    <div className="register">
      <button className="register-btn">
        <img src={exit} alt="log out" />
      </button>
      <ul className="register-list">
        <li className="register-item">Ro'yhatdan o'tish</li>
      </ul>
      <form className="login-form">
        <label className="login-label">
          <input
            ref={userNameRef}
            className="input"
            type="text"
            placeholder="Foydalanuvchi nomi"
          />
        </label>
        <label className="login-label">
          Elektron pochta (optinal)
          <input ref={emailRef} className="input" type="email" />
        </label>
        <label className="login-label">
          Parol
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input ref={passwordRef} className="input" type="password" />
            <button
              className="eyebtn"
              type="button"
              onClick={() => handleEyeOpen()}
            >
              <img style={{ display: "block" }} src={Eye} alt="koz btn" />
            </button>
          </div>
        </label>
        <button onClick={handleSubmit} className="enter-btn" type="submit">
          Tizimga kirish
        </button>
      </form>
    </div>
  );
}

export default Register;

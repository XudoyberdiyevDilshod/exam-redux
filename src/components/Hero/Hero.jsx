import React from "react";
import "./Hero.css";
import doctor from "./images/portrait-doctor-video-call.jpg";
import phone from "./images/phone.svg";
import message from "./images/message.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">Bepul shifokor maslahat kerakmi?</h1>
            <div className="hero__content--text">
              <p className="hero__text">
                24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq Faqat{" "}
                <p className="strong">mobil ilovada</p>
              </p>
            </div>
            <div className="hero__box">
              <img
                src={doctor}
                alt="portrait-doctor-video-call"
                width="836"
                height="500px"
                className="hero__box--img"
              />
              <div className="hero__box-content hero__box-content-r">
                <p className="hero__box--right hero__box--text">
                  <strong className="hero__box--strong-r hero__box--strong">
                    Consultant
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ullamcorper in et amet.
                </p>
              </div>
              <div className="hero__box-content hero__box-content-l">
                <p className="hero__box--left hero__box--text">
                  <strong className="hero__box--strong-l hero__box--strong">
                    24/7 xizmatlar
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ullamcorper in et amet.
                </p>
              </div>
            </div>
          </div>
          <div className="tel-m">
            <button className="telefon-message t">
              <img src={phone} alt="telephone" width="87" height="87" />
            </button>
            <button className="telefon-message m">
              <img src={message} alt="telephone" width="87" height="87" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

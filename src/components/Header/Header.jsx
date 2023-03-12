import React from "react";
import "../Header/Header.css";
import flag from "./images/uzb-flag.svg";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__item">Mahsulotlar katalogi</li>
              <li className="nav__item">Foto-lavhalar</li>
              <li className="nav__item">Yetkazib berish va to'lash</li>
              <li className="nav__item sale">Aksiya</li>
              <li className="nav__item new">Yangi</li>
            </ul>
            <ul className="header-top__list">
              <li className="header-top__item">
                <img src={flag} alt="uzb flag" width="42" height="16" />
              </li>
              <li className="header-top__item">Toshkent shahar</li>
              <li className="header-top__item">Kirish</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

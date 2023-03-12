import React from "react";
import { Link, NavLink } from "react-router-dom";
import bookmark from "./images/bookmark.svg";
import kart from "./images/kart.svg";
import "./Navbar.css";
import { useSelector } from "react-redux";
import logo from "./images/LOGO.svg";

export const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        <img src={logo} width="91" height="39" alt="site logo" />
      </Link>
      <ul className="navbar__list list navbar">
        <li className="navbar__item">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active link border" : "link"
            }
          >
            Bosh sahifa
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "active link border" : "link"
            }
          >
            Mahsulotlar
          </NavLink>
        </li>
      </ul>
      <ul className="cart list navbar">
        <li className="item">
          <Link to={"/like"} className="bookmark">
            <img src={bookmark} alt="bookmark" width="50" height="50" />
          </Link>
        </li>
        <li className="item">
          <Link to={"/cart"} className="bookmark">
            <img src={kart} alt="bookmark" width="50" height="50" />
            {cart.length ? (
              <span className="count-cart">{cart.length}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

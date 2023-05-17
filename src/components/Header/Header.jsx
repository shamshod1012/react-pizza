import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

import "./Header.css";

export const Header = ({ show }) => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to={"/"}>
          <img
            src="https://img.freepik.com/premium-vector/elegant-label-with-pizza-piece-ribbon-tape-strip-isolated-white-background-colorful-vector-illustration-hand-drawn-vintage-style-logo-italian-restaurant-food-delivery-service_198278-6327.jpg?w=2000"
            alt=""
          />
          <div className="header-left-titles">
            <p>REACT PITSA</p>
            <span>Olamdagi Eng Mazali Pitsalar</span>
          </div>
        </Link>
      </div>
      {!show ? (
        <div className="header-right">
          <Link to={"./orders"}>
            {" "}
            <p>77800 so'm</p>
            <span></span>
            <p>
              <BsCart className="header-cart" /> 1
            </p>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

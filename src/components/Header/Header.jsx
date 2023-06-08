import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "./Header.css";

export const Header = ({ show }) => {
  const { allCount, allPrice } = useSelector((state) => state);
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
        <div className="header-right-wrapper">
          <Link to={"/addnewpizza"}>
            <AiOutlineAppstoreAdd
              size={30}
              style={{ color: "#000", cursor: "pointer", marginRight: "20px" }}
            />
          </Link>

          <div className="header-right">
            <Link to={"./orders"}>
              <p>{allPrice} ₽</p>
              <span></span>
              <p>
                <BsCart className="header-cart" /> {allCount}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

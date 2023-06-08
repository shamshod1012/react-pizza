import React from "react";
import { AiFillCreditCard, AiFillDollarCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export const Payment = () => {
  const { allPrice } = useSelector((state) => state);

  return (
    <div className="payment-page">
      <form>
        <p className="icons-cont">
          <AiFillCreditCard size={50} />
          <FaCcVisa size={50} />
          <FaCcMastercard size={50} />
          <AiFillDollarCircle size={50} />
        </p>
        <div>
          <label htmlFor="card-name">Enter Card Name</label>
          <input type="text" id="card-name" />
        </div>
        <div>
          <label htmlFor="card-number">Enter Card number</label>
          <input type="text" id="card-number" />
        </div>
        <div>
          <label htmlFor="card-date">Enter Card date</label>
          <input type="text" id="card-name" date />
        </div>
        <div>
          <label htmlFor="card-cvv">Enter Card CVV</label>
          <input type="text" id="card-cvv" />
        </div>
        <p className="all-price-check">{allPrice} руб.</p>
        <input className="pay-btn-check" type="submit" value={"Pay"} />
        <p className="return-home">
          <Link to={"/"}>
            <AiOutlineArrowLeft className="order-arrow" /> Orqaga qaytish
          </Link>
        </p>
      </form>
    </div>
  );
};

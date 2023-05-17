import React from "react";

import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import "./OrderCard.css";

export const OrderCard = () => {
  return (
    <div className="order-card">
      <img
        src="https://s3.envato.com/files/287210036/Delicious%20Pizza%20Isolated%20over%20white%20background.jpg"
        alt="pitsa rasmi"
      />

      <div className="order-card-info">
        <p className="order-card-title">Kolbasa, Bodring va Pishloqli</p>
        <p className="order-card-desc">yupqa, 26 cm</p>
      </div>

      <div className="order-card-btns">
        <p>
          <AiOutlineMinusCircle />
        </p>
        <span>1</span>
        <p>
          <AiOutlinePlusCircle />
        </p>
      </div>
      <div className="order-card-right">
        <p className="order-card-price">77800 so'm</p>
        <p className="order-card-delete">
          <AiOutlineCloseCircle />
        </p>
      </div>
    </div>
  );
};

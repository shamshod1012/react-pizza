import React, { useState } from "react";

import "./Card.css";

export const Card = ({ img, price, nomi }) => {
  const [toifa, setToifa] = useState("yupqa");
  const [razmer, setRazmer] = useState(26);

  return (
    <div className="card-container">
      <div className="img-cont">
        <img src={img} alt="pitsa rasmi" />
      </div>
      <p className="card-title">{nomi}</p>
      <div className="section-pitsa">
        <div className="section-pitsa-top">
          <p
            className={toifa === "yupqa" ? "card-current-section" : ""}
            onClick={() => setToifa("yupqa")}
          >
            Yupqa
          </p>
          <p
            className={toifa === "ananaviy" ? "card-current-section" : ""}
            onClick={() => setToifa("ananaviy")}
          >
            Ananaviy
          </p>
        </div>
        <div className="section-pitsa-bottom">
          <p
            className={razmer === 26 ? "card-current-section" : ""}
            onClick={() => setRazmer(26)}
          >
            26 cm
          </p>
          <p
            className={razmer === 30 ? "card-current-section" : ""}
            onClick={() => setRazmer(30)}
          >
            30 cm
          </p>
          <p
            className={razmer === 40 ? "card-current-section" : ""}
            onClick={() => setRazmer(40)}
          >
            40 cm
          </p>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-price">{price} so'm</p>
        <div className="add-button">+ Qo'shish</div>
      </div>
    </div>
  );
};

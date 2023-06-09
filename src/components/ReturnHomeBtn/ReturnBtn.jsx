import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ReturnBtn = () => {
  return (
    <p className="return-home">
      <Link to={"/"}>
        <AiOutlineArrowLeft className="order-arrow" /> Orqaga qaytish
      </Link>
    </p>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const PayBtn = () => {
  return (
    <p className="pay-btn">
      <Link to={"/payment"}>Buyurtma qilish</Link>
    </p>
  );
};

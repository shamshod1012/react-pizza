import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const Error = () => {
  return (
    <div className="error-page">
      <p>404</p>
      <span>Page Not Found</span>

      <span>
        <Link to={"/"}>Go Home</Link>
      </span>
    </div>
  );
};

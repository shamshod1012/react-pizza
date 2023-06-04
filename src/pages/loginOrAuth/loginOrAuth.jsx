import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LoginOrAuth = () => {
  return (
    <div className="lodin-or-auth">
      <div className="btn-container">
        <Link to={"/login"}>
          <button> Login </button>
        </Link>
        <Link to={"/auth"}>
          <button> Sign Up </button>
        </Link>
      </div>
    </div>
  );
};

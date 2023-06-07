import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LoginOrAuth = () => {
  return (
    <div className="login-or-auth">
      <header>
        <h1>Pizza Storega xush Kelibsiz</h1>
        <p>Davom etish uchun akkaunt yarating (sign in), yoki Mavjud akkauntga kiring (login)</p>
      </header>

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

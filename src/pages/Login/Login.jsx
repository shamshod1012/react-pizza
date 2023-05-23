import React from "react";
import { BsFillPersonFill, BsPersonCircle, BsPersonLock } from "react-icons/bs";
import "../Auth/Auth.css";
export const Login = () => {
  return (
    <div className="auth-page">
      <div className="form-header">
        <BsFillPersonFill className="auth-img" size={200} />
      </div>
      <h1>login</h1>
      <form action="">
        <div>
          <label htmlFor="email">
            <BsPersonCircle size={30} />
          </label>
          <input placeholder="EMAIL..." id="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <BsPersonLock size={30} />
          </label>
          <input placeholder="PASSWORD..." id="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Dont have account?</p>
    </div>
  );
};

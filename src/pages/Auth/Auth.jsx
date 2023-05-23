import React, { useState } from "react";
import { BsFillPersonFill, BsPersonCircle, BsPersonLock } from "react-icons/bs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

import "./Auth.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
   ==============================================
   */

  const signIn = () => {};

  /*
   ==============================================
   */

  return (
    <div className="auth-page">
      <div className="form-header">
        <BsFillPersonFill className="auth-img" size={200} />
      </div>
      <h1>create account</h1>
      <form action="">
        <div>
          <label htmlFor="email">
            <BsPersonCircle size={30} />
          </label>
          <input
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
            placeholder="EMAIL..."
            id="email"
            type="text"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">
            <BsPersonLock size={30} />
          </label>
          <input
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
            placeholder="PASSWORD..."
            id="password"
            type="password"
            value={password}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <p>already have account?</p>
    </div>
  );
};

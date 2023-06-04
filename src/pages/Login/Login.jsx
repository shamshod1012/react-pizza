import React, { useState } from "react";
import { BsFillPersonFill, BsPersonCircle, BsPersonLock } from "react-icons/bs";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { Link } from "react-router-dom";

import "./Login.css";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import Alert from "@mui/material/Alert";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../config/firebase";
import { AiOutlineLoading } from "react-icons/ai";

export const Login = () => {
  const [isAccLoading, setIsAccLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const login = async (data) => {
    try {
      setIsAccLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setIsAccLoading(false);
      setShowAlert(true);
      localStorage.setItem("isUser", true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsAccLoading(false);
      setShowErrorAlert(true);

      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      setShowAlert(true);
      localStorage.setItem("isUser", true);

      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-page">
      {showAlert && (
        <div className="alert-wrapper">
          <Alert
            severity="success"
            sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
            className="MuiAlert-standard"
          >
            muvaffaqiyatli Login Qildingiz!
          </Alert>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert-wrapper">
          <Alert
            severity="error"
            sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
            className="MuiAlert-standard"
          >
            nimadir xato ketdi qayta urining
          </Alert>
        </div>
      )}

      <div className="login-wrapper">
        <div className="form-header">
          <BsFillPersonFill className="auth-img" size={200} />
        </div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(login)}>
          <div className="form-div">
            <div>
              <label htmlFor="email">
                <BsPersonCircle size={30} />
              </label>
              <input
                placeholder="EMAIL..."
                id="email"
                type="text"
                // value={email}
                {...register("email", { required: true, minLength: 10 })}
              />
            </div>
            {errors?.email?.type === "required" && (
              <span className="errorMessage">email majburiy!</span>
            )}
            {errors?.email?.type === "minLength" && (
              <span className="errorMessage">
                10tadan ko'p ma'lumot kiriting
              </span>
            )}
          </div>
          <div className="form-div">
            <div>
              <label htmlFor="password">
                <BsPersonLock size={30} />
              </label>
              <input
                placeholder="PASSWORD..."
                id="password"
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
            </div>
            {errors?.password?.type === "required" && (
              <span className="errorMessage">parol majburiy!</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="errorMessage">6 tadan ko'p parol kiriting</span>
            )}
          </div>
          <button type="submit">
            {isAccLoading && <AiOutlineLoading className="loading-auth" />}
            Login
          </button>
          <button onClick={signInWithGoogle}>
            <FcGoogle className="google-icon" />
            Login With Google
          </button>
        </form>
        <Link to={"/auth"}>
          <span className="bottom-msg">Dont have account?</span>
        </Link>
      </div>
    </div>
  );
};

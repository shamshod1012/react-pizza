import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GiFullPizza } from "react-icons/gi";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import "./style.css";
import { AiOutlineLoading } from "react-icons/ai";
export const AddNewPizza = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const pizzasRef = collection(db, "pizzas");

  const addPizza = async (data) => {
    setLoading(true);
    const newPizza = {
      nomi: data.nomi,
      img: data.img,
      price: data.price.toString(),
      toifa: data.toifa,
      miqdor: 0,
    };
    await addDoc(pizzasRef, newPizza);
    navigate("/");
    setLoading(false);
  };
  const num = 123;
  console.log(num);
  return (
    <div className="add-sneaker-page">
      <form onSubmit={handleSubmit(addPizza)}>
        <GiFullPizza size={180} />
        <p>Add new pizza</p>

        <div>
          <label htmlFor="nomi">Pitsaning nomini kiriting</label>
          <input
            type="text"
            id="nomi"
            {...register("nomi", { required: true })}
          />
          {errors?.nomi?.type === "required" && (
            <span className="errorMessage">Nomi Majburiy</span>
          )}
        </div>
        <div>
          <label htmlFor="img">Pitsa rasmiga url ko'rsating</label>
          <input
            type="text"
            id="img"
            {...register("img", { required: true, minLength: 15 })}
          />
          {errors?.img?.type === "required" && (
            <span className="errorMessage">Rasm Majburiy</span>
          )}
          {errors?.img?.type === "minLength" && (
            <span className="errorMessage">
              15 ta harfdan iborat url kiriting
            </span>
          )}
        </div>
        <div>
          <label htmlFor="price">Pitsaning narxini kiriting</label>
          <input
            type="number"
            id="price"
            {...register("price", {
              required: true,
              max: 4000,
            })}
          />
          {errors?.price?.type === "required" && (
            <span className="errorMessage"> Narx majburiy </span>
          )}

          {errors?.price?.type === "maxLength" && (
            <span className="errorMessage">
              maximal 4000 gacha kiritish mumkin
            </span>
          )}
        </div>
        <div>
          <label htmlFor="toifa">Pitsaning toifasini kiriting</label>
          <select id="toifa" {...register("toifa")}>
            <option value="vegeterian">Vegeterian</option>
            <option value="pishloqli">Pishloqli</option>
            <option value="aralash">Aralash</option>
            <option value="grill">Grill</option>
            <option value="goshtli">Goshtli</option>
            <option value="achchiq">Achchiq</option>
          </select>
        </div>
        <button
          type="submit"
          className={
            loading ? "add-pizza-btn disabled-btn-add" : "add-pizza-btn"
          }
        >
          {" "}
          {loading && <AiOutlineLoading className="loading-auth" />} Submit
        </button>
      </form>
    </div>
  );
};
/*  */

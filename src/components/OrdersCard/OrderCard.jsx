import React, { useEffect, useState } from "react";

import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import { db } from "../../config/firebase";
import { updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import "./OrderCard.css";

export const OrderCard = ({
  nomi,
  price,
  id,
  editid,
  img,
  tur,
  razmer,
  miqdor,
  getOrders,
  getOrdertest,
}) => {
  const [pizzamiqdor, setPizzamiqdor] = useState(miqdor);
  const pizzaRef = doc(db, "pizzas", id);
  const [isMinus, setIsMinus] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const plusCount = async () => {
    const data = await getDoc(pizzaRef);
    const singlePizza = data.data();
    const updPizzaCount = singlePizza.miqdor;

    const editingItem = doc(db, "order", editid);
    const editingPizzaAll = doc(db, "pizzas", id);
    const updMiqdor = pizzamiqdor + 1;
    setPizzamiqdor(updMiqdor);

    await updateDoc(editingItem, { miqdor: updMiqdor });
    await updateDoc(editingPizzaAll, { miqdor: updPizzaCount + 1 });
    if (updMiqdor !== 1) {
      setIsMinus(true);
    }
    getOrdertest();
  };

  const minusCount = async () => {
    const data = await getDoc(pizzaRef);
    const singlePizza = data.data();
    const updPizzaCount = singlePizza.miqdor;
    const editingItem = doc(db, "order", editid);
    const editingPizzaAll = doc(db, "pizzas", id);
    const updMiqdor = pizzamiqdor - 1;
    setPizzamiqdor(updMiqdor);
    await updateDoc(editingItem, { miqdor: updMiqdor });
    await updateDoc(editingPizzaAll, { miqdor: updPizzaCount - 1 });
    if (updMiqdor === 1) {
      setIsMinus(false);
    }
    getOrdertest();
  };

  useEffect(() => {
    if (pizzamiqdor !== 1) {
      setIsMinus(true);
    } else if (pizzamiqdor === 1) {
      setIsMinus(false);
    }
  }, [pizzamiqdor]);

  const deletePizza = async () => {
    const confirmation = window.confirm("are you sure to delete pizza?");
    if (confirmation) {
      setDeleteLoading(true);
      const data = await getDoc(pizzaRef);
      const singlePizza = data.data();
      const updPizzaCount = singlePizza.miqdor;

      const deletingItem = doc(db, "order", editid);

      await updateDoc(pizzaRef, { miqdor: updPizzaCount - pizzamiqdor });
      await deleteDoc(deletingItem);
      getOrders();
    }
    getOrdertest();
  };

  return (
    <div className="order-card">
      <img src={img} alt="pitsa rasmi" />

      <div className="order-card-info">
        <p className="order-card-title">{nomi}</p>
        <p className="order-card-desc">
          {tur}, {razmer} cm
        </p>
      </div>

      <div className="order-card-btns">
        <p
          onClick={minusCount}
          className={isMinus ? "enabled-btn" : "disabled-btn"}
        >
          <AiOutlineMinusCircle />
        </p>
        <span>{pizzamiqdor}</span>
        <p onClick={plusCount} className={"enabled-btn"}>
          <AiOutlinePlusCircle />
        </p>
      </div>
      <div className="order-card-right">
        <p className="order-card-price">{price} ₽</p>
        <p
          className={
            deleteLoading
              ? "order-card-delete disabled-btn-add"
              : "order-card-delete"
          }
          onClick={deletePizza}
        >
          <AiOutlineCloseCircle />
        </p>
      </div>
    </div>
  );
};

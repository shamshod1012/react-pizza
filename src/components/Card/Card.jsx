import React, { useEffect, useState } from "react";

import { db } from "../../config/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";

import "./Card.css";

export const Card = ({
  img,
  price,
  nomi,
  miqdor = 0,
  id,
  setPizzas,
  getOrder,
}) => {
  const [tur, settur] = useState("yupqa");
  const [razmer, setRazmer] = useState(26);
  const [PizzaMiqdor, setPizzaMiqdor] = useState(miqdor);
  const [loading, setLoading] = useState(false);
  const collectionOrder = collection(db, "order");
  const collectionPizzas = collection(db, "pizzas");

  const addOrder = async () => {
    setLoading(true);
    const orders = await getItems(collectionOrder);

    const updatedPizzaMiqdor = PizzaMiqdor + 1;
    setPizzaMiqdor(updatedPizzaMiqdor);
    const editingItem = doc(db, "pizzas", id);
    await updateDoc(editingItem, { miqdor: updatedPizzaMiqdor });

    const isorder = orders.some((item) => {
      return item.id === id && item.tur === tur && item.razmer === razmer;
    });

    if (!isorder) {
      const newPizza = {
        id: id,
        img: img,
        nomi: nomi,
        price: price,
        tur: tur,
        razmer: razmer,
        miqdor: 1,
      };
      await addDoc(collectionOrder, newPizza);
    } else {
      const test = orders.filter((item) => {
        return item.id === id && item.tur === tur && item.razmer === razmer;
      });

      const editingItem = doc(db, "order", test[0].editid);
      updateDoc(editingItem, { miqdor: test[0].miqdor + 1 });
    }
    getOrder();
    setLoading(false);
  };

  const getItems = async (coll) => {
    const data = await getDocs(coll);
    const filteredItems = data.docs.map((item) => {
      return { ...item.data(), editid: item.id };
    });
    return filteredItems;
  };

  // useEffect(() => {
  //   getItems(collectionOrder);
  // }, []);

  return (
    <div className="card-container">
      <div className="img-cont">
        <img src={img} alt="pitsa rasmi" />
      </div>
      <p className="card-title">{nomi}</p>
      <div className="section-pitsa">
        <div className="section-pitsa-top">
          <p
            className={tur === "yupqa" ? "card-current-section" : ""}
            onClick={() => settur("yupqa")}
          >
            Yupqa
          </p>
          <p
            className={tur === "ananaviy" ? "card-current-section" : ""}
            onClick={() => settur("ananaviy")}
          >
            Ananaviy
          </p>
        </div>
        <div className="section-pitsa-bottom">
          <p
            className={razmer === 26 ? "card-current-section" : ""}
            onClick={() => setRazmer(26)}
          >
            26 cm
          </p>
          <p
            className={razmer === 30 ? "card-current-section" : ""}
            onClick={() => setRazmer(30)}
          >
            30 cm
          </p>
          <p
            className={razmer === 40 ? "card-current-section" : ""}
            onClick={() => setRazmer(40)}
          >
            40 cm
          </p>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-price">{price} ₽</p>
        <div
          className={loading ? "add-button disabled-btn-order" : "add-button"}
          onClick={addOrder}
        >
          + Qo'shish {PizzaMiqdor > 0 ? <p>{PizzaMiqdor}</p> : null}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";

import { db } from "../../config/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const onSubmitImg = () => {
    navigate(`pizza/${id}`);
  };

  const selectTop = [
    { id: 1, title: "yupqa" },
    { id: 2, title: "ananaviy" },
  ];
  const selectBottom = [
    { id: 1, title: 26 },
    { id: 2, title: 30 },
    { id: 3, title: 40 },
  ];

  return (
    <div className="card-container">
      <div className="img-cont">
        <img onClick={onSubmitImg} src={img} alt="pitsa rasmi" />
      </div>
      <p className="card-title">{nomi}</p>
      <div className="section-pitsa">
        <div className="section-pitsa-top">
          {selectTop.map((item) => {
            return (
              <p
                key={item.id}
                className={tur === item.title ? "card-current-section" : ""}
                onClick={() => settur(item.title)}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="section-pitsa-bottom">
          {selectBottom.map((item) => {
            return (
              <p
                key={item.id}
                className={razmer === item.title ? "card-current-section" : ""}
                onClick={() => setRazmer(item.title)}
              >
                {item.title} cm
              </p>
            );
          })}
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

import React, { useEffect, useState } from "react";

import { Header, Wrapper, Cards } from "../../components/";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { TbLoader3 } from "react-icons/tb";
import { useDispatch } from "react-redux";

import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const collectionPizzas = collection(db, "pizzas");
  const collectionOrder = collection(db, "order");
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);

  const isUser = localStorage.getItem("isUser");
  useEffect(() => {
    getPizzas(collectionPizzas);
    getOrder();
  }, []);
  const getOrder = async () => {
    try {
      const res = await getDocs(collectionOrder);
      const filtered = res.docs.map((item) => item.data());
      const realData = filtered.filter((item) => {
        const length = Object.keys(item).length;
        return length && item;
      });
      if (realData) {
        const count = realData.map((item) => item.miqdor);
        const allCount = count.reduce((acc, q) => {
          return acc + q;
        }, 0);
        const price = realData.map((item) => {
          return Number(item.price) * item.miqdor;
        });
        const allPrice = price.reduce((acc, q) => {
          return acc + q;
        }, 0);
        dispatch({ type: "SAVE_COUNT", payload: allCount });
        dispatch({ type: "SAVE_PRICE", payload: allPrice });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getPizzas = async (coll) => {
    try {
      setLoading(true);
      const data = await getDocs(coll);
      const filteredPizzas = data.docs.map((pizza) => {
        return { ...pizza.data(), id: pizza.id };
      });
      setPizzas(filteredPizzas);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  if (isUser === null) {
    navigate("/loginorauth");
    return;
  }
  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Cards
          setPizzas={setPizzas}
          loading={loading}
          data={pizzas}
          getOrder={getOrder}
        />
      </Wrapper>
    </div>
  );
};

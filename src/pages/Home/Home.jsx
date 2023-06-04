import React, { useEffect, useState } from "react";

import { Header, Wrapper, Cards } from "../../components/";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { TbLoader3 } from "react-icons/tb";

import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  const collectionPizzas = collection(db, "pizzas");
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);

  const isUser = localStorage.getItem("isUser");
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      setLoading(true);
      const data = await getDocs(collectionPizzas);
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
        <Cards loading={loading} data={pizzas} />
      </Wrapper>
    </div>
  );
};

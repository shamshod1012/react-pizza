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

  // if (!localStorage.getItem("user")) {
  //   navigate();
  // }

  const getPizzas = async () => {
    try {
      setLoading(true);
      const data = await getDocs(collectionPizzas);
      const filteredPizzas = data.docs.map((pizza) => {
        return { ...pizza.data(), id: pizza.id };
      });
      setPizzas(filteredPizzas);
      setLoading(false);
      console.log(loading);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Cards loading={loading} data={pizzas} />
      </Wrapper>
    </div>
  );
};
/*
 import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={230}
    height={430}
    viewBox="0 0 230 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="114" cy="124" r="107" /> 
    <rect x="9" y="243" rx="0" ry="0" width="208" height="29" /> 
    <rect x="12" y="306" rx="0" ry="0" width="209" height="72" /> 
    <rect x="13" y="403" rx="0" ry="0" width="97" height="23" /> 
    <rect x="128" y="402" rx="0" ry="0" width="88" height="24" />
  </ContentLoader>
)

export default MyLoader

 */

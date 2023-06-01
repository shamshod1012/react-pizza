import React from "react";

import { Header, Wrapper, Cards } from "../../components/";
import { pitsalar } from "../../data";

import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import "./Home.css";

export const Home = () => {
  const { allPizzas } = pitsalar;
  const collectionPizzas = collection(db, "pizzas");

  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Cards data={allPizzas} />
      </Wrapper>
    </div>
  );
};

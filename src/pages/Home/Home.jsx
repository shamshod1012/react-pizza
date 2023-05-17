import React from "react";

import { Header, Wrapper, Cards } from "../../components/";
import { pitsalar } from "../../data";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Wrapper>
        <Header />
        <Cards data={pitsalar} />
      </Wrapper>
    </div>
  );
};

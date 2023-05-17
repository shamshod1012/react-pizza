import React, { useState } from "react";

import { Card } from "../Card/";

import "./Cards.css";

export const Cards = (props) => {
  const { data } = props;

  const [pitsalar, setPitsalar] = useState(data);

  const testToifalar = data.map((element) => {
    return element.toifa;
  });
  const toifalar = ["hammasi", ...new Set(testToifalar)];

  const [hozirgiToifa, setHozirgiToifa] = useState("hammasi");
  function setPizza(toifa) {
    console.log(toifa);
    if (toifa === "hammasi") {
      setPitsalar(data);
      setHozirgiToifa("hammasi");
    } else {
      const pizza = data.filter((item) => {
        return item.toifa === toifa;
      });
      setHozirgiToifa(toifa);
      setPitsalar(pizza);
    }
  }

  return (
    <main>
      <div className="main-header">
        <div className="main-header-left">
          {toifalar.map((toifa) => {
            return (
              <button
                onClick={() => {
                  setPizza(toifa);
                }}
                className={
                  hozirgiToifa === toifa ? "toifaBtn hozirgiToifa" : "toifaBtn"
                }
              >
                {toifa}
              </button>
            );
          })}
        </div>

        <div className="main-header-right">
          <select className="filterSelect" name="filterSelect" id="">
            <option value="">Narxi</option>
            <option value="">Alifbo Tartibi</option>
          </select>
          <label className="filterLabel" htmlFor="filterSelect">
            Bo'yicha saralash
          </label>
        </div>
      </div>

      <div className="main-cards">
        <div className="main-cards-title">Barcha Pitsalar</div>
        <div className="main-cards-all">
          {pitsalar.map((pitsa) => {
            return <Card key={pitsa.id} {...pitsa} />;
          })}
        </div>
      </div>
    </main>
  );
};

import React, { useState, useEffect } from "react";
import { Card } from "../Card/";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { MyLoader } from "../loadingSkeleton";
import "./Cards.css";

export const Cards = ({ setPizzas, data, loading, getOrder, getPizzas }) => {
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState("Mashhurlik");
  const [pitsalar, setPitsalar] = useState(data);

  const testToifalar = data.map((element) => {
    return element.toifa;
  });
  const toifalar = ["hammasi", ...new Set(testToifalar)];

  const [hozirgiToifa, setHozirgiToifa] = useState("hammasi");

  useEffect(() => {
    setPitsalar(data);
  }, [loading]);

  const sortby = async () => {
    const pizzatest = await getPizzas();
    if (activeItem === "Mashhurlik") {
      setPitsalar(data);
      return;
    }
    if (activeItem === "Narxi") {
      setPitsalar(pizzatest.sort(compare));
    }
    if (activeItem === "Alifbo") {
      setPitsalar(
        pizzatest.sort(function (a, b) {
          if (a.nomi < b.nomi) {
            return -1;
          }
          if (a.nomi > b.nomi) {
            return 1;
          }
          return 0;
        })
      );
    }
  };

  useEffect(() => {
    sortby();
  }, [activeItem]);

  function setPizza(toifa) {
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

  const fakeArr = new Array(8).fill([]);
  const listItems = [
    { id: 1, title: "Mashhurlik" },
    { id: 2, title: "Narxi" },
    { id: 3, title: "Alifbo" },
  ];

  const compare = (a, b) => {
    const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
    const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));

    return aPrice - bPrice;
  };
  console.log();
  return (
    <main>
      <div className="main-header">
        <div className="main-header-left">
          {toifalar.map((toifa, i) => {
            return (
              <button
                key={i}
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
          <div
            className="filter-select"
            onClick={() => setActive((value) => !value)}
          >
            <p>
              <span>{active ? <VscTriangleUp /> : <VscTriangleDown />}</span>
              <span>{activeItem}</span>
              bo'yicha saralash
            </p>
            <ul className={active ? "filter-list" : "hide-filter-list"}>
              {listItems.map((item) => {
                return (
                  <li key={item.id} onClick={() => setActiveItem(item.title)}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="main-cards"
        onClick={() => {
          setActive(false);
        }}
      >
        <div className="main-cards-title">Barcha Pitsalar</div>
        <div className="main-cards-all">
          {loading
            ? fakeArr.map((item, index) => {
                return <MyLoader key={index} />;
              })
            : pitsalar.map((pitsa) => {
                return (
                  <Card
                    key={pitsa.id}
                    getOrder={getOrder}
                    setPizzas={setPizzas}
                    {...pitsa}
                  />
                );
              })}
        </div>
      </div>
    </main>
  );
};

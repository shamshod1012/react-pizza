import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import "./Header.css";

export const Header = ({ bigPizzas, show, setPizzas, pizzas, getPizzas }) => {
  const dispatch = useDispatch();
  const { allCount, allPrice, allPizzas } = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState("");

  const search = async (e) => {
    setSearchValue(e.target.value);
    if (searchValue.trim().length) {
      const searchedItems = bigPizzas.filter((item) => {
        return item.nomi.includes(searchValue.trim());
      });
      await getPizzas();
      setPizzas(searchedItems);
    } else  {
      await getPizzas();

      setPizzas(bigPizzas);
    }
  };
  return (
    <div className="header">
      <div className="header-left">
        <Link to={"/"}>
          <img
            src="https://img.freepik.com/premium-vector/elegant-label-with-pizza-piece-ribbon-tape-strip-isolated-white-background-colorful-vector-illustration-hand-drawn-vintage-style-logo-italian-restaurant-food-delivery-service_198278-6327.jpg?w=2000"
            alt=""
          />
          <div className="header-left-titles">
            <p>REACT PITSA</p>
            <span>Olamdagi Eng Mazali Pitsalar</span>
          </div>
        </Link>
      </div>

      {!show ? (
        <>
          <div className="header-search-cont">
            <input type="text" onChange={search} />
          </div>
          <div className="header-right-wrapper">
            <Link to={"/addnewpizza"}>
              <AiOutlineAppstoreAdd
                size={30}
                style={{
                  color: "#000",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              />
            </Link>

            <div className="header-right">
              <Link to={"./orders"}>
                <p>{allPrice} ₽</p>
                <span></span>
                <p>
                  <BsCart className="header-cart" /> {allCount}
                </p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

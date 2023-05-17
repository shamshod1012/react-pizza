import React from "react";

import { Header, Wrapper, OrderCard } from "../../components";
import { BsTrash3, BsCart } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Orders.css";

export const Orders = () => {
  return (
    <div className="orders">
      <Wrapper>
        <Header show={"notShow"} />
        <div className="orders-wrapper">
          <div className="orders-header">
            <div className="orders-header-left">
              <p>
                <BsCart />
              </p>
              <p>Savat</p>
            </div>

            <div className="orders-header-right">
              <p className="orders-trash">
                <BsTrash3 />
              </p>
              <p>Savatni Tozalash</p>
            </div>
          </div>

          <div className="orders-main">
            <OrderCard />
          </div>

          <div className="orders-footer">
            <div className="orders-footer-left">
              <p>
                Jami Pitsalar: <span>1 dona</span>
              </p>

              <p className="return-home">
                <Link to={"/"}>
                <AiOutlineArrowLeft /> Orqaga qaytish
                </Link>
              </p>
            </div>

            <div className="orders-footer-right">
              <p>
                Umumiy narx: <span>77800 so'm</span>
              </p>
              <p className="pay-btn">Naqd to'lash</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

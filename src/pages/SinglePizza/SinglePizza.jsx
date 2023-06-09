import ContentLoader from "react-content-loader";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Wrapper, Header } from "../../components";
import { ReturnBtn, PayBtn } from "../../components";

import "./style.css";
export const SinglePizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPizza = async () => {
    try {
      setLoading(true);
      const pizzaRef = doc(db, "pizzas", id);
      const res = await getDoc(pizzaRef);
      const data = res.data();
      console.log(data);
      setPizza(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };

  const MyLoader = (props) => {
    return (
      <ContentLoader
        speed={2}
        width={1200}
        height={400}
        viewBox="0 0 1200 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="302" cy="219" r="166" />
        <rect x="535" y="130" rx="0" ry="0" width="438" height="28" />
        <rect x="538" y="197" rx="0" ry="0" width="380" height="59" />
        <rect x="541" y="287" rx="0" ry="0" width="386" height="46" />
      </ContentLoader>
    );
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div>
      <Wrapper>
        <Header show={"notShow"} />
        <main className="single-pizza-main">
          {!loading ? (
            <>
              <div>
                <img src={pizza?.img} alt="" />
              </div>
              <div>
                <p>{pizza?.nomi}</p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores, qui. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam pariatur non quos? Perspiciatis
                    quibusdam aperiam corrupti facere accusamus. Maiores, magni.
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias animi non harum sapiente amet neque quas.
                    Assumenda ab recusandae deleniti magnam animi harum fugiat,
                    dolorem, tempore temporibus itaque eum nisi!
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <MyLoader className={"single-loader"} />
          )}
        </main>
        <footer className="single-pizza-footer">
          <ReturnBtn />

          <PayBtn />
        </footer>
      </Wrapper>
    </div>
  );
};

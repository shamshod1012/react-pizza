import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsTelegram,
} from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./style.css";
export const Footer = () => {
  const array = [
    {
      id: 1,
      url: "https://github.com/shamshod1012",
      element: <BsGithub />,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/shamshod-toshpulatov-617104269/",
      element: <BsLinkedin />,
    },
    {
      id: 3,
      url: "https://twitter.com/Shamshod_beek",
      element: <AiFillTwitterSquare />,
    },
    {
      id: 4,
      url: "https://www.facebook.com/profile.php?id=100086037634416",
      element: <BsFacebook />,
    },
    {
      id: 5,
      url: "https://www.instagram.com/shamshod.beek/",
      element: <BsInstagram />,
    },
    {
      id: 6,
      url: "https://t.me/shamshod1012",
      element: <BsTelegram />,
    },
  ];

  return (
    <footer className="footer-comp">
      <div className="footer-div">
        <p>&copy; Shamshod Toshpulatov</p>
        <div className="socials-cont">
          {array.map((item) => {
            return (
              <a key={item.id} href={item.url}>
                {item.element}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

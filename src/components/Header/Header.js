import React from "react";
import Style from "./header.module.css";
import logo from "../../img/logo.png";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

export default function Header() {
  return (
    <div className={Style.headerflex}>
      <div className={Style.headerlogo}>
        <img src={logo} alt="" />
        Sunira Paudel
      </div>
      <div className={Style.headernav}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Blogs</li>
          <li>
            <RiFacebookBoxFill />
          </li>
          <li>
            <AiFillInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import Style from "./body.module.css";
import hero from "../../img/hero.JPG";
import Blog from '../Blog/Blog';


export default function Body() {
  return (
    <>
      <div className={Style.hero_container}>
        <div className={Style.hero_flex}>
          <img className="hero_img" src={hero} alt="" />
          <div className={Style.herotext}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum
            odit similique. Porro eius laudantium delectus fugit dolorum
            reprehenderit pariatur?
            <br></br>
            <button>Read more</button>
            <button>Read Blogs</button>
          </div>
        </div>
      </div>
      <Blog />
    </>
  );
}

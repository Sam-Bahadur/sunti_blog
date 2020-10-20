import React from "react";
import style from "./Blog.module.css";
import button from "../Button/Button.module.css"

export default function Blog() {
  return (
    <div className={style.blog}>
      <div className={style.blogflex}>
        <div className={style.flex_blog}>
          <h3>The birth of Legend</h3>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            unde quisquam rerum ipsum dolores accusamus possimus sit, quae,
            consequuntur accusantium placeat molestias autem reiciendis dicta
            nemo ab dignissimos nam odio architecto amet corrupti repellendus
            quibusdam! A sapiente magnam ipsam ullam consectetur autem expedita
            nulla porro dolore ducimus? Dolor, debitis odio?
          </h4>
          <button>more blogs</button>
        </div>
        <div className={style.flex_date}>
          <h3>november</h3>
          <h4>1996</h4>
        </div>
      </div>
    </div>
  );
}

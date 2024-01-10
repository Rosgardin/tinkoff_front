import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerMain}>
        <h1 className={style.leftText}>Кинопоиск</h1>
        <div className={style.rightRectangle}>
          <div className={style.rightText}>Байбеков Рустам</div>
        </div>
      </div>
    </header>
  );
};

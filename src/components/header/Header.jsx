import React from "react";
import logo from "../../images/logo.png";
import css from "./Header.module.scss";

export default function Header() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <img src={logo} alt="brb"></img>
        <div className={css.a_container}>
          <a href="#" className={css.a}>
            Features
          </a>
          <a href="#" className={css.a}>
            Sign Up
          </a>
          <a href="#" className={css.a_with_background}>
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

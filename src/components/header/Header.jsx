import React from "react";
import logo from "../../images/logo.png";
import css from "./Header.module.scss";

export default function Header() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <img src={logo} alt="something went wrong"></img>
        <div className={css.a_container}>
          <a href="#" className={css.header_link}>
            Features
          </a>
          <a href="#" className={css.header_link}>
            Sign Up
          </a>
          <a href="#" className={css.link_with_background}>
            Sign In
          </a>
        </div>
      </div>
      <hr className={css.hr}></hr>
    </div>
  );
}

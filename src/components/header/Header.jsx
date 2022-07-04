import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import css from "./Header.module.scss";
import { useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <div className={css.header}>
        <div className={css.header_body}>
          <Link to="/" className={css.logo}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className={css.header_burger} onClick={() => setActive(!active)}>
            <span></span>
          </div>
          <nav className={css.header_menu}>
            <ul className={css.header_list}>
              <li>
                <Link to="/" className={css.header_link}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className={css.header_link}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/" className={css.header_link_with_background}>
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className={css.hr}></hr>
      </div>
      {active && (
        <nav className={css.header_menu_active}>
          <ul className={css.header_list_active}>
            <li>
              <Link to="/" className={css.header_link}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className={css.header_link}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/" className={css.header_link_with_background}>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

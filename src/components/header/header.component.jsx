import React from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header--navbar">
      <div className="logo">
        <img
          className="logo__img"
          src={`${process.env.PUBLIC_URL}/assets/logo/kitiya.png`}
          alt=""
        />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/#services" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="/#about" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="/#work" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

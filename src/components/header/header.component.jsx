import React from "react";
import "./header.styles.scss";

const NavItem = ({ text, url, handleClick }) => {
  return (
    <li className="nav__item">
      <a href={url} className="nav__link" onClick={handleClick}>
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  const handleNavToggleClick = () => {
    document.body.classList.toggle("nav-open");
  };

  const closeToggleMenu = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header className="header--navbar">
      <div className="logo">
        <img
          className="logo__img"
          src={`${process.env.PUBLIC_URL}/assets/logo/kitiya.png`}
          alt=""
        />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleNavToggleClick}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <NavItem text="Home" url="/#" handleClick={closeToggleMenu} />
          <NavItem
            text="My Services"
            url="/#services"
            handleClick={closeToggleMenu}
          />
          <NavItem
            text="About me"
            url="/#about"
            handleClick={closeToggleMenu}
          />
          <NavItem text="My Work" url="/#work" handleClick={closeToggleMenu} />
          <NavItem
            text="Contact"
            url="/#contact"
            handleClick={closeToggleMenu}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { socialMediaListDB } from "./social-media-list-db";
import "./footer.styles.scss";

const SocialListItem = ({ mediaName, fontAwesome, mediaLink }) => {
  return (
    <li className="social-list__item">
      <a
        className="social-list__link"
        href={mediaLink}
        title={mediaName}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className={fontAwesome}></i>
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-list">
        {socialMediaListDB.map((item, index) => (
          <SocialListItem
            key={index}
            mediaName={item.mediaName}
            fontAwesome={item.fontAwesome}
            mediaLink={item.mediaLink}
          />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

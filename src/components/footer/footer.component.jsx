import React from "react";
import { socialMediaListDB } from "./social-media-list-db";
import "./footer.styles.scss";

const SocialListItem = ({ mediaName, fontAwesome, mediaLink }) => {
  return (
    <li className="social-list__item">
      <a className="social-list__link" href={mediaLink}>
        <i className={fontAwesome}></i>
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      {/* <a href="mailto:warasint@gmail.com" className="footer__link">
        warasint@gmail.com
      </a> */}
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

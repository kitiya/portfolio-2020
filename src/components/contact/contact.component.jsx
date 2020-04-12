import React from "react";
import { contactListDB } from "./social-list-db";
import "./contact.styles.scss";

const SocialListItem = ({ media, mediaLink }) => {
  return (
    <li className="social-list__item">
      <a className="social-list__link" href={mediaLink}>
        {media}
      </a>
    </li>
  );
};

const Contact = () => {
  return (
    <section>
      <a href="mailto:warasint@gmail.com" className="contact__link">
        warasint@gmail.com
      </a>
      <ul className="social-list">
        {contactListDB.map((item, index) => (
          <SocialListItem
            key={index}
            media={item.media}
            mediaLink={item.mediaLink}
          />
        ))}
      </ul>
    </section>
  );
};

export default Contact;

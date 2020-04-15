import React from "react";
import Fade from "react-reveal/Fade";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h3>Interested in doing a project together?</h3>
      <Fade>
        <img
          className="contact__img"
          src={`${process.env.PUBLIC_URL}/assets/img/work_together.svg`}
          alt="work together"
        />
      </Fade>

      <a className="btn btn--contact" href="mailto:warasint@gmail.com">
        CONTACT ME
      </a>
    </section>
  );
};

export default Contact;

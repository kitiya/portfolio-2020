import React from "react";
import Fade from "react-reveal/Fade";
import "./introduction.styles.scss";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am{" "}
        <Fade>
          <strong>Kitiya S.</strong>
        </Fade>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Software Developer
      </p>
      <Fade>
        <img
          className="section__image--intro"
          src={`${process.env.PUBLIC_URL}/assets/img/profile03.jpg`}
          alt="profile"
        />
      </Fade>
    </section>
  );
};

export default Introduction;

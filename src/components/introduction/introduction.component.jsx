import React from "react";
import "./introduction.styles.scss";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Kitiya</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intor">
        front-end dev
      </p>
      <img
        className="section__image"
        src={`${process.env.PUBLIC_URL}/assets/img/profile.jpg`}
        alt="profile"
      />
    </section>
  );
};

export default Introduction;

import React from "react";
import Fade from "react-reveal/Fade";
import "./about.styles.scss";

const About = () => {
  return (
    <Fade>
      <section className="about-me" id="about">
        <div className="container">
          <h2 className="section__title section__title--about">Who I am</h2>
          <p className="section__subtitle section__subtitle--about">
            Software developer based in Toronto
          </p>
          <img
            className="about-me__img"
            src={`${process.env.PUBLIC_URL}/assets/img/about_me.jpg`}
            alt="about me"
          />
          <div className="about-me__body">
            <p>
              I am a full stack developer looking for a new role in an exciting
              company. I focus on writing accesible HTML, using modern CSS
              practices, and writing clean JavaScript and TypeScript. When
              writing front-end code, I mostly use React.js and React Native,
              but I can adapt to whatever tools are required.
            </p>
            <p>
              I am based in Toronto, Canada, but I am happy working remotely and
              have experience in remote teams. When I am not coding, you will
              find me outdoors. I love being out with my family and friends in
              nature whether that is going for a walk, run or cycling.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;

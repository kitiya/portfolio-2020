import React from "react";
import Fade from "react-reveal/Fade";
import { myServiceDB } from "./my-service-db";
import "./my-services.styles.scss";

const MyService = ({ title, details }) => {
  return (
    <div className="service">
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  );
};

const MyServices = () => {
  return (
    <Fade delay={300} duration={2000}>
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
          {myServiceDB.map((item, index) => (
            <MyService
              key={index}
              title={item.title}
              details={item.description}
            />
          ))}
        </div>

        <a href="/#work" className="btn">
          My Work
        </a>
      </section>
    </Fade>
  );
};

export default MyServices;

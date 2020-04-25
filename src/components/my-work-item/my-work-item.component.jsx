import React from "react";
import Fade from "react-reveal";
import "./my-work-item.styles.scss";

const MyWorkItem = ({ title, techStack, description, imageUrl }) => {
  const urlPath = `${process.env.PUBLIC_URL}/assets/img/portfolio/${imageUrl}`;
  const iconUrl = `${process.env.PUBLIC_URL}/assets/icons/brands-50px/`;
  return (
    <Fade>
      <section className="work-item">
        <h2 className="work-item__title">{title}</h2>
        <div className="work-item__main-content">
          <div className="container container__image">
            <img src={urlPath} alt="" className="work-item__image" />
            <div className="work-item__actions">
              <a className="btn btn__mywork btn__mywork--demo" href="/#">
                Live Project
              </a>
              <a
                className="btn  btn__mywork btn__mywork--source-code"
                href="/#"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="container container__text-content">
            <p className="work-item__description">{description}</p>
          </div>
        </div>
        <div className="work-item__footer">
          <h4 className="tech-stack__subtitle">Tech Stack</h4>
          <div className="tech-stack">
            {techStack.map((item, index) => (
              <img
                key={index}
                src={`${iconUrl}/${item.icon}.svg`}
                alt={item.title}
                className="work-item__brand-icon"
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default MyWorkItem;

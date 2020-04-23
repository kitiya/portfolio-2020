import React from "react";
import "./my-work-item.styles.scss";

const MyWorkItem = ({ title, techStack, description, imageUrl }) => {
  const urlPath = `${process.env.PUBLIC_URL}/assets/img/portfolio/${imageUrl}`;
  const iconUrl = `${process.env.PUBLIC_URL}/assets/icons/brands-50px/`;
  return (
    <section className="work-item">
      <h2 className="work-item__title">{title}</h2>
      <div className="wrapper">
        <div className="container container__image">
          <img src={urlPath} alt="" className="work-item__image" />
          <div className="work-item__actions">
            <a className="btn btn__mywork btn__mywork--demo" href="/#">
              Live Project
            </a>
            <a className="btn  btn__mywork btn__mywork--source-code" href="/#">
              Source Code
            </a>
          </div>
        </div>
        <div className="container container__text-content">
          <div className="work-item__tech-stack">
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
          <p className="work-item__description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default MyWorkItem;

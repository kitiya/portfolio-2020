import React from "react";
import { portfolioDb } from "./my-work-db";
import "./my-work.styles.scss";

const PortfolioItem = ({ projectUrl, imageUrl }) => {
  const urlPath = `${process.env.PUBLIC_URL}/assets/img/portfolio`;
  return (
    <a href="{projectUrl}" className="portfolio__item">
      <img src={`${urlPath}/${imageUrl}`} alt="" className="portfolio__img" />
    </a>
  );
};

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">x</h2>
      <p className="section__subtitle">x</p>
      <div className="portfolio">
        {portfolioDb.map((item, index) => {
          return (
            <PortfolioItem
              key={item}
              projectUrl={item.projectUrl}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;

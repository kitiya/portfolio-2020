import React from "react";
import { portfolioDb } from "./my-work-db";
import "./my-work.styles.scss";

const PortfolioItem = ({ projectUrl, imageUrl }) => {
  const urlPath = `${process.env.PUBLIC_URL}/assets/img/portfolio`;
  return (
    <a href={projectUrl} className="portfolio__item">
      <img src={`${urlPath}/${imageUrl}`} alt="" className="portfolio__img" />
    </a>
  );
};

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Portfolio</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {portfolioDb.map((item, index) => {
          return (
            <PortfolioItem
              key={index}
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

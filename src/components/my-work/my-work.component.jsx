import React from "react";
import MyWorkItem from "../my-work-item/my-work-item.component";
import { MyWorkItemDb } from "./my-work-db";
import "./my-work.styles.scss";

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <div className="my-work__wrapper">
        <h2 className="section__title section__title--work">My Portfolio</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>
      </div>
      <div className="portfolio">
        {MyWorkItemDb.map((item, index) => {
          return (
            <MyWorkItem
              key={index}
              title={item.title}
              techStack={item.techStack}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;

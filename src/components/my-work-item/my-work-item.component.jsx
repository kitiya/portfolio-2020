import React from "react";
import Fade from "react-reveal";
import "./my-work-item.styles.scss";

const MyWorkItem = ({
  title,
  imageUrl,
  description,
  demoUrl,
  githubUrl,
  techStack,
}) => {
  console.log(demoUrl);
  const urlPath = `${process.env.PUBLIC_URL}/assets/img/portfolio/${imageUrl}`;
  const iconUrl = `${process.env.PUBLIC_URL}/assets/icons/brands-50px/`;
  return (
    <Fade>
      <section className="work-item">
        <h2 className="work-item__title">{title}</h2>
        <img src={urlPath} alt="" className="work-item__image" />

        <main className="work-item__main">
          <div className="work-item__text-content">
            <p className="work-item__description">{description}</p>
            <div className="work-item__actions">
              {demoUrl ? (
                <a
                  className="btn btn__mywork"
                  href={demoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Project
                </a>
              ) : null}

              <a
                className="btn  btn__mywork"
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="work-item__tech-stack">
            {techStack.map((item, index) => (
              <img
                key={index}
                src={`${iconUrl}/${item.icon}.svg`}
                alt={item.title}
                className="tech-stack__brand-icon"
                title={item.title}
              />
            ))}
          </div>
        </main>
      </section>
    </Fade>
  );
};

export default MyWorkItem;

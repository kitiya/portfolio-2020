import React from "react";
import "./about.styles.scss";

const About = () => {
  return (
    <section className="about-me" id="about">
      <header className="header--about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">About Me</p>
      </header>
      <div className="about-me__body">
        <p>
          Cheesecake biscuit sugar plum ice cream. Candy brownie chocolate cake
          jelly pie jelly beans liquorice. Tiramisu pie oat cake chupa chups
          chocolate ice cream jujubes brownie. Icing soufflé jelly pudding
          cheesecake ice cream biscuit ice cream candy canes. Gummies liquorice
          muffin. Marzipan chocolate bar carrot cake.
        </p>
        <p>
          Chupa chups soufflé chocolate tiramisu macaroon carrot cake. Toffee
          lemon drops sweet roll. Icing pudding bear claw pie soufflé. Tootsie
          roll candy canes marzipan muffin apple pie carrot cake. Sweet sesame
          snaps sugar plum sweet roll chocolate. Candy candy tiramisu carrot
          cake chocolate cake.
        </p>
        <p>
          Ice cream carrot cake candy canes sweet dessert chocolate muffin bear
          claw donut. Macaroon bear claw bear claw tiramisu cheesecake candy
          canes gummi bears. Donut jujubes sweet roll cookie. Lollipop sweet
          roll pie. Dessert gummies powder bonbon powder muffin chocolate.
        </p>
      </div>
      <img
        className="image--about"
        src={`${process.env.PUBLIC_URL}/assets/img/about_me.jpg`}
        alt="about me"
      />
    </section>
  );
};

export default About;

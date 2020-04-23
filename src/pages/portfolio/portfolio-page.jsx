import React from "react";
import Fade from "react-reveal/Fade";
import "./portfolio-page.style.scss";

import Footer from "../../components/footer/footer.component";

const PortfolioPage = () => {
  return (
    <>
      <section className="portfolio_item">
        <h1 className="section__title section__title--portfolio">
          E-commerce
          <Fade>
            <strong>KatieArt</strong>
          </Fade>
        </h1>
        <p className="section__subtitle section__subtitle--portfolio">
          Artwork Online Store
        </p>
        <Fade>
          <img
            className="section__image--portfolio"
            src={`${process.env.PUBLIC_URL}/assets/img/portfolio/artwork2.png`}
            alt="artwork project"
          />
        </Fade>
      </section>

      <section className="portfolio-item-content">
        <p>
          Cupcake ipsum dolor sit amet pudding cake. Marshmallow chocolate cake
          chocolate cake soufflé. Danish icing halvah jelly-o wafer fruitcake
          pudding cake chocolate bar. Dragée icing chocolate cake tiramisu lemon
          drops wafer lemon drops biscuit pastry. Cheesecake chocolate chocolate
          sugar plum cake sesame snaps icing caramels. Cake wafer bear claw
          donut. Powder croissant jelly-o cotton candy croissant.{" "}
        </p>
        <img
          className="section__image--portfolio"
          src={`${process.env.PUBLIC_URL}/assets/img/portfolio/artwork.png`}
          alt="artwork project"
        />
        <p>
          Gummi bears cupcake chupa chups sweet roll. Lollipop chocolate
          cheesecake sugar plum pudding cupcake chocolate cake jelly-o. Candy
          donut gummi bears toffee liquorice carrot cake. Toffee chocolate bar
          marzipan.{" "}
        </p>
        <p>
          Fruitcake chupa chups sweet roll brownie cake gingerbread. Donut chupa
          chups chocolate bar lollipop. Chocolate cake cookie sugar plum
          marshmallow biscuit fruitcake muffin croissant. Pastry biscuit
          chocolate bar topping apple pie sesame snaps jelly biscuit dragée.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioPage;

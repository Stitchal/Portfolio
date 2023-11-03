import React from "react";
import Container from "./Container";
import iutImage from "../assets/iut.png";
import universiteCoteDazurImage from "../assets/universiteCoteDazur.png";
import EtudeItem from "./EtudeItem";

const Etudes = () => {
  return (
    <Container title="Études" titleLevel="3">
      <div className="flex flex-col gap-4">
        <EtudeItem
          link="https://iut.univ-cotedazur.fr/"
          title="Université de Nice Sophia Antipolis"
          name="Licence 3 MIAGE"
          year="2023-2024"
          image={universiteCoteDazurImage}
          location="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=miage+nice&source=lnms&entry=mc&sa=X&ved=2ahUKEwj0po_n46iCAxV3UaQEHdwxAcwQ0pQJegQICRAB"
        />
        <EtudeItem
          link="https://iut.univ-cotedazur.fr/"
          title="IUT Nice Côte d'Azur"
          name="DUT Informatique"
          year="2021-2023"
          image={iutImage}
          location="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=iut+fabron&source=lnms&entry=mc&sa=X&sqi=2&ved=2ahUKEwjLusHh46iCAxUKT6QEHXazBAUQ0pQJegQICxAB"
        />
      </div>
    </Container>
  );
};

export default Etudes;

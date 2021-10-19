import React, { Component } from "react";
import XpArticles from "./XpArticles";

export default class Experience extends Component {
  state = {
    experiences: [
      {
        id: 1,
        name: "Mercure Bordeaux Centre Ville",
        year: "2018 - 2020",
        description: "Réceptionniste tournant et mobile",
      },
      {
        id: 2,
        name: "Ibis Style Paris Roissy CDG",
        year: "2015 - 2018",
        description: "Chef de brigade de réception",
      },
      {
        id: 3,
        name: "Apprentissage au Comfort Hotel CDG",
        year: "2014 - 2015",
        description: "Service réception",
      },
      {
        id: 4,
        name: "Stage au Hilton Xi'an (Chine)",
        year: "2012 - 4 mois",
        description: "Chef de rang sur divers services",
      },
      {
        id: 5,
        name: "Salon de la gastronomie (Madrid) et Transgourmet",
        year: "2012",
        description: "Prestataire pour le stand Flying’chef",
      },
    ],
    training: [
      {
        id: 1,
        name: "Formation OpenClassRooms - Développeur Web",
        year: "2020-2021",
        description: "Formation en ligne",
      },
      {
        id: 2,
        name: "Séjour linguistique à l’école ILSC New-Delhi",
        year: "2014 – 2015",
        description:
          "Business English & English Communication Program (I 4 level) – Inde 3 mois ",
      },
      {
        id: 3,
        name: "Licence professionnelle hôtellerie (en alternance)",
        year: "2013 - 2015",
        description:
          "Management des Produits de Restauration – IUT de Saint-Denis (93)",
      },
      {
        id: 4,
        name: "BTS Hôtellerie-Restauration ",
        year: "2011 - 2013",
        description:
          "Option: Art Culinaire, Art de la table et du Service . Lycée François Rabelais de Dugny (93)",
      },
    ],
  };
  render() {
    let { experiences, training } = this.state;

    return (
      <div className="experience">
        <XpArticles main={training} title="Cursus Scolaire" />
        <XpArticles main={experiences} title="Expériences Professionnelles" />
      </div>
    );
  }
}

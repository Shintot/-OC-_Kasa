import "../style/DropmenusResponsabilite.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import React, { useState } from "react";

function Accordion() {

  

  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className="accordionre">
      <div
        className={`accordion__headerre ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className="txt">Sécurité</h2>
        <span className="accordion__iconre">
          {isActive ? (
            <FiChevronDown className="chevron" />
          ) : (
            <FiChevronUp className="chevron" />
          )}
        </span>
      </div>
      <div
        className={`accordion__contentre txtaccordeon ${
          isActive ? "active" : ""
        }`}
      >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </div>
    </div>
  );
}

export default Accordion;

/*  <div className="dropmenu">
      <label htmlFor="touch">
        <span className="span">titre</span>
      </label>
      <input type="checkbox" id="touch"></input>
      <ul className="slide">
        <li>
          <p>Lorem Ipserfzrzrzrrrrrrrrrrrrrrrrrrrrrrrum</p>
        </li>
      </ul>
    </div>*/

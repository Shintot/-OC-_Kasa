import "../style/DropmenusFiabilite.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import React, { useState } from "react";

function Accordion() {

  

  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className="accordionf">
      <div
        className={`accordion__headerf ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className="txt">Fiabilité</h2>
        <span className="accordion__iconf">
          {" "}
          {isActive ? (
            <FiChevronDown className="chevron" />
          ) : (
            <FiChevronUp className="chevron" />
          )}
        </span>
      </div>
      <div
        className={`accordion__contentf txtaccordeon ${
          isActive ? "active" : ""
        }`}
      >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
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

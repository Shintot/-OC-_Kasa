import "../style/DropmenusRespect.css";
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
        <h2 className="txt">Respect</h2>
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
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
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

import "../style/DropmenusEquipement.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import React, { useState } from "react";

function Accordion(props) {
  const {location} = props
  const { equipments } = location;
  console.log(equipments);
  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className="accordion">
      <div
        className={`accordion__header ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className="txt">Equipement</h2>
        <span className="accordion__icone">
          {isActive ? (
            <FiChevronDown className="chevron" />
          ) : (
            <FiChevronUp className="chevron" />
          )}
        </span>
      </div>
      <div
        className={`accordion__content txtaccordeon ${
          isActive ? "active" : ""
        }`}
      >
        {equipments &&
          equipments.length > 0 &&
          equipments.map((equipment, index) => <p key={index}>{equipment}</p>)}
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
    </div>
    <FiChevronUp/>

    */

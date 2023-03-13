import "../style/Dropmenus.css";


import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
function Accordion(props) {

  const {location} = props

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
        <h2 className="txt">Decription</h2>
        <span className="accordion__icon">
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
        {location.description}
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

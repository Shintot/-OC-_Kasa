import "../style/DropmenusService.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import React, { useState } from "react";

function Accordion() {

  

  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className="accordions">
      <div
        className={`accordion__headers ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className="txt">Service</h2>
        <span className="accordion__icon">
          {isActive ? (
            <FiChevronDown className="chevron" />
          ) : (
            <FiChevronUp className="chevron" />
          )}
        </span>
      </div>
      <div
        className={`accordion__contents txtaccordeon ${
          isActive ? "active" : ""
        }`}
      >
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
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

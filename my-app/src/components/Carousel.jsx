import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.css";
import "../style/Carousel.css";


//lpppl

export default function MyCarousel(props) {
  const { location } = props;
  const pictures = location?.pictures || [];
  const [position, setPosition] = useState(0);
  const [imageCount, setImageCount] = useState(`${position + 1}/${pictures.length}`);

  const next = () => {
    setPosition((position + 1) % pictures.length);
    setImageCount(`${(position + 2) % pictures.length}/${pictures.length}`);
  };

  const prev = () => {
    setPosition((position - 1 + pictures.length) % pictures.length);
    setImageCount(`${position}/${pictures.length}`);
  };

  return (
    <div className="carousel">
      {pictures.length > 0 && (
        <>
          <div className="flex">
            <FiChevronLeft className="prev" onClick={prev} />
            <img src={pictures[position]} alt="" />
            <FiChevronRight className="next" onClick={next} />
          </div>
          <div className="image-count">{imageCount}</div>
        </>
      )}
      {pictures.length === 0 && <p>No pictures available for this location</p>}
    </div>
  );
}

// <FiChevronRight className="next" onClick={next} />
/*z-index: 10;
    position: absolute;
    top: 30rem;
    color: white;
    left: 45%;
} */



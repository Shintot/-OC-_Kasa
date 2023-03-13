import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Presentation from "../components/Presentation";
import Dropmenus from "../components/Dropmenus";
import DropmenusEquipement from "../components/DropmenusEquipement";
import ErrorBoundary from "../components/ErreurBoundary";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import "../style/location.css";


function Location() {

  const [location, setLocation] = useState({});
  const params=useParams();

  useEffect(
    function () {
      fetch("/database.json")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          const locations = data.find(function (loc) {
            return loc.id === params.id;
          });
          setLocation(locations);
        });
    },
    []
  );

    return (
      <div>
        <Banner />
        <ErrorBoundary>
          <Carousel location={location} />
          <Presentation location={location} />
          <div className="flex">
            <Dropmenus location={location} />
            <DropmenusEquipement location={location} />
          </div>
          <Footer />
        </ErrorBoundary>
      </div>
    );
}

export default Location;
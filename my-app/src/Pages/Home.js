
import React from 'react'
import Footer from '../components/Footer';
import Annonces from "../components/Annonces";
import Banner from "../components/Banner";
import Entete from "../components/Entete";
import { useEffect, useState } from "react";
import ErrorBoundary from '../components/ErreurBoundary';

function Home() {

  const [annonces, setAnnonces] = useState([]);

  useEffect(function () {
    fetch("/database.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setAnnonces(data);
      });
  }, []);

    return (
      <div>
        <Banner />
        <ErrorBoundary>
          <Entete />
          <Annonces annonces={annonces} />
          <Footer />
        </ErrorBoundary>
      </div>
    );
            
    
}

export default Home;
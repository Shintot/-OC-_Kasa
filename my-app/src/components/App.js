import React from 'react';
import Home from "../Pages/Home";
import Apropos from "../Pages/Apropos";
import Location from "../Pages/Location";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<Apropos />} />
        <Route path="/Locations/:id" element={<Location />} />
      </Routes>
    </div>
  );
}



export default App;

/* const Rating = ({hostRate}) => {
    //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
    const fullStars = Array(5).fill(<img src={red_star} alt='Full star' className='redStar'/>)
    const emptyStars = Array(5).fill(<img src={grey_star} alt='Empty Star' className='greyStar'/>)
    return (
            <div className='ratingStars'>
                {fullStars.slice(5-hostRate).map((fullStar, index) => {
                return (<p key={index}>{fullStar}</p>)
                })}
                {emptyStars.slice(hostRate).map((emptyStar, index) => {
                return (<p key={index}>{emptyStar}</p>)
                })}
            </div>
    );
};

export default Rating;*/

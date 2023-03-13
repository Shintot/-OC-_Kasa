import {Link} from "react-router-dom"
import "../style/Annonces.css";


   function Annonces(props) {

    const { annonces } = props;
       console.log(annonces)
    
     return (
       <div className="contenant2">
         {annonces.map(function (annonces) {
           return (
             <div key={annonces.id} className="img-annonces">
               <Link to={`/Locations/${annonces.id}`}>
                 <img
                   src={annonces.cover}
                   to="/Locations"
                   className="annonces"
                 ></img>
               </Link>
               <p className="annonce_titre">{annonces.title}</p>
             </div>
           );
         })}
       </div>
     );
   }

   export default Annonces;

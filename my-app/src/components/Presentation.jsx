import "../style/Presentation.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Presentation(props) {


  const { location } = props;
  const { rating } = location;
  console.log(rating);

 const maxStars = 5;
 const stars = [];

 for (let i = 1; i <= maxStars; i++) {
   if (i <= rating) {
     stars.push(< AiFillStar key={i} className="etoiles"/>);
   } else {
     stars.push(<AiOutlineStar key={i} className="etoiles" />);
   }
 }

     
 return (
   <div className="presentation">
     <div>
       <h1 className="presentation__titre">{location.title}</h1>
       {location.location && (
         <p className="presentation__texte">{location.location}</p>
       )}
       <div className="flex2">
         {location.tags && (
           <>
             {location.tags.map((tag, index) => (
               <div className="presentation__tagline">
                 <div className="presentation__tags">
                   <p key={index} className="presentation__tagstitre">
                     {tag}
                   </p>
                 </div>
               </div>
             ))}
           </>
         )}
       </div>
     </div>
     {location.host && (
       <div className="presentation__hote">
         <div className="contenante">
           {location.host.name && (
             <p className="presentation__texte2">{location.host.name}</p>
           )}
           {location.host.picture && (
             <img
               src={location.host.picture}
               className="presentation__portrait"
             ></img>
           )}
         </div>
         <div className="lesEtoiles">{stars}</div>
       </div>
     )}
   </div>
 );
}



export default Presentation;

/*     justify-content: flex-end;
    display: flex;
    margin-right: 4rem;
    
    
    
        display: flex;
    margin-right: 4rem;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;*/
import "../style/Banner.css";
import logo from '../assets/Kasa.png'
import {Link} from "react-router-dom"

function Banner() {
  return (
    <div className="banner flexBetween1">
      <a href="/">
        <img src={logo} alt="Logo Kasa"></img>
      </a>
      <div>
        <Link className="nav navAcc" to="/">
          Accueil
        </Link>
        <Link className="nav" to="/A-Propos">
          A Propos
        </Link>
      </div>
    </div>
  );
}

export default Banner;

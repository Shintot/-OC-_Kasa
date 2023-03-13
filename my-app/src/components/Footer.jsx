import "../style/footer.css"
import logofooter from '../assets/kasa_footer.png'

function footer() {
    return (
      <div className="footer">
        <img src={logofooter} className="footer_img"></img>
        <h2 className="footer-copyright">© 2020 Kasa. All rights reserved</h2>
      </div>
    );
}

export default footer;
import "./nav.scss";

import logo from "../../images/logo.svg";
import buttonFace from "../../images/buttonFace.svg";
import buttonMoney from "../../images/buttonMoney.svg";
import buttonMusic from "../../images/buttonMusic.svg";
import buttonNotification from "../../images/buttonNotification.svg";
import iconHome from "../../images/iconHome.svg";
import iconWorkshops from "../../images/iconWorkshops.svg";
import iconGallery from "../../images/iconGallery.svg";
import iconFamily from "../../images/iconFamily.svg";

function Nav() {
  return (
    <div className="top-nav-bar">
      <img src={logo} />
      <div className="menu-options">
        <div className="menu-option">
          <img src={iconHome} />
          <span className="menu-text"> Mi zona de Talleres </span>
        </div>
        <div className="menu-option">
          <img src={iconWorkshops} />
          <span className="menu-text">Talleres </span>
        </div>
        <div className="menu-option">
          <img src={iconGallery} />
          <span className="menu-text"> Galería de Trabajos </span>
        </div>
        <div className="menu-option">
          <img src={iconFamily} />
          <span className="menu-text"> Biblioteca Familiar </span>
        </div>
      </div>

      <div className="action-buttons">
        <img src={buttonFace} />
        <img src={buttonMusic} />
        <img src={buttonMoney} />
        <img src={buttonNotification} />
      </div>
    </div>
  );
}

export default Nav;

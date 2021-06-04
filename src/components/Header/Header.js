import "./header.scss";

import face from "../../images/face.svg";
import rocket from "../../images/rocket.svg";
import backgroundButton from "../../images/backgroundButton.svg";
import clouds from "../../images/clouds.svg";

import iconFollow from "../../images/iconFollow.svg";
import iconMusic from "../../images/iconMusic.svg";
import iconStar from "../../images/iconStar.svg";
import iconMoney from "../../images/iconMoney.svg";

function Header() {
  return (
    <div>
      <div
        className="container-header"
        style={{
          backgroundImage: `url(${clouds})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10% 200%",
          backgroundSize: "110%",
        }}
      >
        <div className="container-avatar">
          <img src={face} />
          <div>
            <span
              style={{
                backgroundImage: `url(${backgroundButton})`,
                color: "black",
                backgroundSize: "auto",
              }}
            >
              Cambiar avatar
            </span>
          </div>
        </div>

        <div className="container-info">
          <span> HOLA, ILAI</span>
          <h1> ¿Qué haremos el día de hoy?</h1>

          <div className="container-icons">
            <div className="container-icon">
              <img src={iconFollow} className="info-icon" />
              <span> Sigues a 12 Artistas </span>
            </div>

            <div className="container-icon">
              <img src={iconMusic} className="info-icon" />
              <span> 20 Canciones </span>
            </div>

            <div className="container-icon">
              <img src={iconStar} className="info-icon" />
              <span> 30 Estrellas </span>
            </div>

            <div className="container-icon">
              <img src={iconMoney} className="info-icon" />
              <span> 3000 Monedas </span>
            </div>
          </div>

          <span> Ver artistas </span>
        </div>

        <img src={rocket} />
      </div>
      {/*   <img src={clouds} /> */}
    </div>
  );
}

export default Header;

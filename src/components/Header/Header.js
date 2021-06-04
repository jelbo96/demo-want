import face from "../../images/face.svg";
import rocket from "../../images/rocket.svg";

function Header() {
  return (
    <div>
      <p> Primera pantalla </p>
      <img src={face} />
      <img src={rocket} />
    </div>
  );
}

export default Header;

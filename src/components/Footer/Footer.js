import "./footer.scss";
import footer from "../../images/footer.svg";
import kidSafe from "../../images/kidSafe.svg";

function Footer() {
  return (
    <>
      <img src={footer} className="background-footer" />
      <div className="footer">
        <div>
          <span> PLASTINIARTE 2021 </span>
        </div>

        <div>
          <span className="menu"> NOSOTROS </span>
          <span className="menu"> BLOG </span>
        </div>

        <div className="security">
          <span> Seguridad para tus hijos </span>
          <img src={kidSafe} />
        </div>
      </div>
    </>
  );
}

export default Footer;

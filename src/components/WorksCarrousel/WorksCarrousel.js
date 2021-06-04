import "./worksCarrousel.scss";
import demoCardDino from "../../images/demoCardDino.jpg";

function WorksCarrousel() {
  const arr = [
    "Un tiranosaurio con palitos de helado",
    "Mi huerta de tomates y lechugas",
    "Guitarra rock hecha de caja de cereal",
    "Mi Casita de pájaros pintada con témpera",
    "Mis plantitas en el patio",
    "Dibujando conocemos nuestro sistema solar ",
  ];

  return (
    <div>
      <h2>Mis trabajos publicados</h2>

      <div className="carrousel-container">
        {arr.map((e) => (
          <div
            className="card-long"
            style={{ backgroundImage: `url(${demoCardDino})` }}
          >
            <div className="card-layer">
              <span> Animales </span>

              <span> Un tiranosaurio con palitos de helado </span>

              <span> 16-2 </span>

              <span> Ver OBRA </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksCarrousel;

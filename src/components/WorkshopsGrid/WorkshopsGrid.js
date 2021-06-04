import "./workshopsGrid.scss";

import demoCardDino from "../../images/demoCardDino.jpg";
import ages from "../../images/ages.svg";
import music from "../../images/music.svg";

function WorkshopsGrid() {
  const arr = [
    "Un tiranosaurio con palitos de helado",
    "Mi huerta de tomates y lechugas",
    "Guitarra rock hecha de caja de cereal",
    "Mi Casita de pájaros pintada con témpera",
    "Mis plantitas en el patio",
    "Dibujando conocemos nuestro sistema solar ",
    "Mi Casita de pájaros pintada con témpera",
    "Mis plantitas en el patio",
    "Dibujando conocemos nuestro sistema solar ",
  ];

  return (
    <div>
      <div>
        <div className="grid-container-header">
          <h2>Mis talleres</h2>
        </div>

        <div className="grid-container">
          {arr.map((e) => (
            <div
              className="card-short"
              style={{ backgroundImage: `url(${demoCardDino})` }}
            >
              <div className="card-layer-short">
                <div className="card-headers">
                  <div>
                    <img src={ages} />
                  </div>
                  <div>
                    <img src={music} />
                  </div>
                </div>

                <div className="card-label">
                  <p className="title">{e}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkshopsGrid;

import { HiStar } from "react-icons/hi";
import "../public/css/tarjeta.css";

function Tarjeta({ pelicula, setPelicula, setDetalles, modo }) {
  const PATH = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <div className="tarjeta">
        <div>
          <img
            className={modo ? "imagen border-oscuro" : "imagen border-claro"}
            src={PATH + pelicula.poster_path}
            alt="Poste de la película"
            onClick={e => {
              setDetalles(true)
              setPelicula(pelicula)
            }}
          />
          <span className={modo ? "letra-amarillo fondo-negro-oscuro" : "letra-negra fondo-negro-claro"}>
            <HiStar className="icono" /> {pelicula.vote_average}
          </span>
        </div>
        <div className="titulo-peli">
          <h3 className={modo ? "letra-blanca" : "letra-negra"}>{pelicula.title}</h3>
        </div>
        <p className={modo ? "letra-gris" : "letra-claro"}>{pelicula.release_date}</p>
      </div>
    </>
  );
}

export default Tarjeta;

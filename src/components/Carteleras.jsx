import "../public/css/carteleras.css";
import Tarjeta from "./Tarjeta";
import { CirclesWithBar } from 'react-loader-spinner';

function Carteleras({ peliculas, titulo, setPelicula, setDetalles, modo }) {
  return (
    <>
      <section className="cartelera">
        <div className="subtitulo">
          <div></div>
          <h2 className={modo ? "letra-blanca" : "letra-negra"}>{titulo}</h2>
        </div>

        {peliculas === undefined ? (
          <CirclesWithBar
          height="100"
          color="blue"
          outerCircleColor="blue"
          innerCircleColor="blue"
          barColor="blue"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          width="100"
        />
        ) : (
          <div className="muro">
            {peliculas.map((pelicula) => (
              <Tarjeta modo={modo} pelicula={pelicula} setPelicula={setPelicula} setDetalles={setDetalles} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Carteleras;

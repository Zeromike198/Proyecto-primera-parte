import { HiSearch } from "react-icons/hi";
import "../public/css/navegacion.css";
import Logo from '../assets/Logo.png'
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { BiAdjust, BiBarcode } from "react-icons/bi";
import { FaAlignJustify } from "react-icons/fa";

function Navegacion({ setPeliculas, setTipo, setTitulo, setBuscado, setDetalles, setModo, modo }) {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTkxYzdhOWNlZDRmNzYwYzU1YzhkYjE1NTE1ODQ2YSIsInN1YiI6IjY1ZjE5YWQyNmRlYTNhMDE2Mzc4ZDVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sej5vwnEAxFP4qf8SdVbwo129BjXsfH4-tBg37EEoSE",
    },
  };

  const [userInput, setUserInput] = useState("");
  const [menu, setMenu] = useState(true);
  const debounceValue = useDebounce(userInput, 1000);

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${debounceValue}&include_adult=false&language=es-ES&page=1`, options
      )
        .then(response => response.json())
        .then(response => {
          setBuscado(true);
          setTitulo('Resultado de Busqueda')
          setPeliculas(response.results)
        })
        .catch(err => console.error(err))
    };

    const sinBuscar = () => {
      setPeliculas([]);
      setBuscado(false)
    }

    userInput ? getData() : sinBuscar();
  }, [debounceValue]);

  const handleChange = ({ target }) => {
    setUserInput(target.value);
  };

  return (
    <>
      <div className={modo ? "header fondo-header-oscuro" : "header fondo-header-claro"}>
        <nav className="nav">
          <h1 className={modo ? "titulo letra-blanca fondo-nav-oscuro" : "titulo letra-negra fondo-nav-claro"}>
            <img src={Logo} alt="Logo CinexZ" /> CinexZ
          </h1>
          <ul className={menu ? (modo ? "enlaces fondo-header-oscuro" : "enlaces fondo-header-claro") : (modo ? "enlaces-hidden fondo-header-oscuro" : "enlaces-hidden fondo-header-claro")}>
            <li>
              <a className={modo ? "letra-blanca" : "letra-negra"} href="#" onClick={e => {
                setTitulo('Películas Populares')
                setTipo('populares')
                setDetalles(false)
              }}>Populares</a>
            </li>
            <li>
              <a className={modo ? "letra-blanca" : "letra-negra"} href="#" onClick={e => {
                setTitulo('Películas con Mayor Calificacion')
                setTipo('calificacion')
                setDetalles(false)
              }}>Calificación</a>
            </li>
            <li>
              <a className={modo ? "letra-blanca" : "letra-negra"} href="#" onClick={e => {
                setTitulo('Películas en Cines')
                setTipo('cines')
                setDetalles(false)
              }}>En Cine</a>
            </li>
            <li>
              <a className={modo ? "letra-blanca" : "letra-negra"} href="#" onClick={e => {
                setTitulo('Nuevos Estrenos')
                setTipo('estrenos')
                setDetalles(false)
              }}>Estrenos</a>
            </li>

            <li className={modo ? "letra-blanca" : "letra-negra"} onClick={e => setModo(!modo)}><BiAdjust /></li>
            <li><form className={modo ? "buscador fondo-nav-oscuro" : "buscador fondo-nav-claro"}>
              <input className={modo ? "letra-blanca" : "letra-negra"} placeholder="Buscar..." value={userInput} onChange={handleChange} />
              <button className={modo ? "letra-blanca" : "letra-negra"} onClick={e => e.preventDefault()}><HiSearch /></button>
            </form></li>
          </ul >
          <div className="cajita">
            <span className={modo ? "letra-blanca" : "letra-negra"} onClick={e => setMenu(!menu)}>
            <FaAlignJustify />
            </span>
          </div>
        </nav >
      </div >
    </>
  );
}

export default Navegacion;

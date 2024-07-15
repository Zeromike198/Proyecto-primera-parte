import { useState } from "react"
import Navegacion from "./components/navegacion"
import Inicio from "./paginas/Inicio"
import Detalles from "./paginas/Detalles";

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [tipo, setTipo] = useState('populares');
  const [titulo, setTitulo] = useState('Películas Populares')
  const [detalles, setDetalles] = useState(false)
  const [pelicula, setPelicula] = useState({})
  const [modo, setModo] = useState(true)
  const [buscado, setBuscado] = useState(false)

  return (
    <>
      <Navegacion modo={modo} setBuscado={setBuscado} setModo={setModo} setDetalles={setDetalles} setPeliculas={setPeliculas} setTipo={setTipo} setTitulo={setTitulo} />
      {
        detalles ? <Detalles pelicula={pelicula} modo={modo} /> : <Inicio setBuscado={setBuscado} buscado={buscado} modo={modo} setDetalles={setDetalles} peliculas={peliculas} tipo={tipo} titulo={titulo} setPeliculas={setPeliculas} setPelicula={setPelicula} />
      }
    </>
  )
}

export default App

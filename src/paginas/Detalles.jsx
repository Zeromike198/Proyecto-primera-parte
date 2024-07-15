import { useEffect, useState } from "react";
import "../public/css/detalles.css";

function Detalles({ pelicula, modo }) {

    const [generos, setGeneros] = useState([]);
    const [trailers, setTrailers] = useState([])

    const PATH = "https://image.tmdb.org/t/p/w300";

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTkxYzdhOWNlZDRmNzYwYzU1YzhkYjE1NTE1ODQ2YSIsInN1YiI6IjY1ZjE5YWQyNmRlYTNhMDE2Mzc4ZDVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sej5vwnEAxFP4qf8SdVbwo129BjXsfH4-tBg37EEoSE'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => {
                const nuevosGeneros = []
                for (let i = 0; i < response.genres.length; i++) {
                    for (let e = 0; e < pelicula.genre_ids.length; e++) {
                        if (response.genres[i].id === pelicula.genre_ids[e]) {
                            nuevosGeneros.push(response.genres[i].name)
                        }
                    }
                }
                setGeneros(nuevosGeneros)
            })
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/' + pelicula.id + '/videos?language=es-ES', options)
            .then(response => response.json())
            .then(response => setTrailers(response.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className={modo ? "fondo oscuro" : "fondo claro"}>
                <main className={modo ? "main fondo-oscuro" : "main fondo-claro"}>
                    <section className="detalles">
                        <div className="cabecera">
                            <img src={PATH + pelicula.poster_path} alt="Imagen pelicula" />
                            <div className="contenido">
                                <h2 className={modo ? "letra-blanca" : "letra-negra"}>{pelicula.title}</h2>
                                <p className={modo ? "letra-blanca" : "letra-negra"}>{pelicula.overview} </p>
                                <div className="generos">
                                    <h3 className={modo ? "letra-amarillo" : "letra-negra"}>Generos: </h3>
                                    {
                                        generos.map((genero) => (
                                            <span className="letra-roja">{genero}</span>
                                        ))
                                    }
                                </div>

                                <h4 className={modo ? "letra-amarillo" : "letra-negra"}>Fecha de Lanzamiento: <b className={modo ? "letra-blanca" : "letra-roja"}>{pelicula.release_date}</b></h4>
                            </div>
                        </div>




                        <div className="videos">
                            <h3 className={modo ? "letra-blanca border-rojo" : "letra-negra border-rojo"}>Video Trailers</h3>
                            {
                                trailers.length === 0 ? <h4 className={modo ? "letra-blanca" : "letra-negra"}>No hay video trailes</h4>
                                    : trailers.map((video) => (
                                        <iframe className="border-oscuro" width="560" height="315" src={'https://www.youtube.com/embed/' + video.key + '?si=TDCJ4Jz2a_e85Cnb'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    ))
                            }
                        </div>

                    </section>
                </main>
            </div>
        </>
    )
}

export default Detalles

import Logo from "/home/gabriel/Área de Trabalho/itegraflix/src/img/Wally.png"
import { useState, useEffect } from "react"
import { apiKey } from "../../config"
import { Link } from "react-router-dom"
import {AiOutlineLoading3Quarters} from "react-icons/ai"



function Home() {
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => setMovies(data.results.slice(0,10)))
            
    }, [])
    
    return(
        

        <div>
            <header>
                <img src={Logo} alt="Logo" className="logo"/>
                <h1 className="title">
                    ITEGRAFLIX
                </h1>
            </header>
            <hr className="linha"/>            
            <p>Populares</p>

            <AiOutlineLoading3Quarters className="load"/>
            <article>
                <section>
                    <ul className="movies">
                        {movies.map(movie => {
                            return(
                                <li key={movie.id}>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                                        <span>{movie.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </article>
            
        </div>
    )
}

export default Home;
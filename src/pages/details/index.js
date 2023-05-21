import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { apiKey } from "../../config"
import {AiFillStar, AiFillHeart} from "react-icons/ai"

import './styles.css';

import Logo from "/home/gabriel/Área de Trabalho/itegraflix/src/img/Wally.png"


function Details(){

    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            const{genres,title, poster_path, overview, popularity, vote_average} = data
            const movie = {
                id,
                title: title,
                genres: genres,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                popularity: popularity,
                vote_average: vote_average
            }
            console.log(movie)
            setMovie(movie)
        
            //setMovie(data.results.slice(0,10))
        })
    },[id])

    return(
        <div>
            <img src={Logo} alt="Logo" className="logo"/>
            <h1 className="title">
                <Link to={`/`}>ITEGRAFLIX</Link>
            </h1>
            <hr className="linha"/> 
            <h1 className="movieTitle">{movie.title}</h1>

            <div className="movie">
                <img className="capa" src={movie.image} alt={movie.sinopse}/>

                <div className="details">
                    
                    <p className="vote"><AiFillStar className="star"/>{movie.vote_average}</p>
                    <p className="popularity"> <AiFillHeart className="heart"/>{Math.trunc(movie.popularity)}</p>
                    <br/>

                </div>
                <span className="text">{movie.sinopse}</span>
            </div>

        </div>
    )
}
export default Details
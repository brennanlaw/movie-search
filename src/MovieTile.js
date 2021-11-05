import React from "react";
import './style.css';

export default function MovieTile(props){
    
    const movie = props.movie;
    
    return (
        <div className="movie_tile">
            <img 
                className="movie_poster" 
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
            />
            <div className="movie_info">
                <h1>{movie.title}</h1>
                <p>RELEASE DATE: {movie.release_date}</p>
                <p>RATING: {movie.rating}</p>
                <p>OVERVIEW: {movie.overview}</p>
            </div>
        </div>
    )
}
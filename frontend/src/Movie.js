import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';
function Movie({ movies }) {
  return (
    <div className="movies-container">
      {movies.map(movie => (
        <Link key={movie._id} to={`/movies/${movie._id}`} className="movie-link">
          <div className="movie-card">
            <div className="movie-image-container">
              <img src={`https://via.placeholder.com/150?text=${movie.name}`} alt={movie.name} className="movie-image" />
            </div>
            <div className="movie-details">
              <h2 className="movie-title">{movie.name}</h2>
              <div className="movie-locations">
                <strong>Locations:</strong>
                <ul>
                  {movie.locations.map((location, index) => (
                    <li key={index}>{location}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Movie;
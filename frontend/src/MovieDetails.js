import React from 'react';
import { useParams } from 'react-router-dom';
// import './MovieDetails.css';

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  // Find the movie with the given movieId
  const movie = movies.find(movie => movie._id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h2 className="movie-title">{movie.name}</h2>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-locations">
        <strong>Locations:</strong>
        <ul>
          {movie.locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;

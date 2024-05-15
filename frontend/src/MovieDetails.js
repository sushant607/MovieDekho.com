import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleLocationClick = (location) => {
    navigate(`/${movie.name}/${location}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.posterFrame}>
        <img
          src={require(`./img/${movie.name}.jpg`)} 
          alt={`${movie.name} Poster`}
          className={styles.poster}
        />
      </div>
      <div className={styles.detailsFrame}>
        <div>
          <h2 className={styles.title}>{movie.name}</h2>
          <p className={styles.description}>{movie.description}</p>
        </div>
        {movie.locations && (
          <div style={{alignContent:"start"}}>
            <strong className={styles.locations}>Locations:</strong>
            <ul className={styles.locationList}>
              {movie.locations.map((location, index) => (
                <li key={index} className={styles.locationItem}>
                  <button className={styles.button} onClick={() => handleLocationClick(location)}>
                    {location}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;

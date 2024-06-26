import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function HomePage({ handleLogout }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleBookTicket = (movieId) => {
    navigate(`/movies/${movieId}`)
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}>
      <div style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {movies.map((movie, index) => (
          <div key={index} style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '5px',
              width: '30%',
              minWidth: '200px',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
            <div style={{ width: '70%', margin: '0 auto' }}>
              <img src={require(`./img/${movie.name}.jpg`)} alt={movie.name + " Poster"} style={{ width: '100%', borderRadius: '5px' }} />
              <h2 style={{ margin: '10px 0', fontSize: '20px' }}>{movie.name}</h2>
              <p style={{ margin: '0' }}>{movie.description}</p>
              <p style={{ margin: '10px 0', fontWeight: 'bold' }}>Location: {movie.location}</p>
              <button onClick={() => handleBookTicket(movie.name)} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
                Book Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

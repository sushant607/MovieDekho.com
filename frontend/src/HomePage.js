import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage({ handleLogout }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies'); // Adjust the URL as needed
        setMovies(response.data);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}>
      {/* Navbar */}
      <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: '#fff',
        }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', margin: '0' }}>MovieDekho.com</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form onSubmit={handleSubmit} style={{ marginRight: '10px' }}>
            <input type="text" placeholder="Search" style={{ padding: '8px', borderRadius: '5px', border: 'none' }} />
            <button type="submit" style={{
                marginLeft: '5px',
                padding: '8px 12px',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}>Search</button>
          </form>
          <button onClick={handleLogout} style={{
              backgroundColor: 'transparent',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}>Logout</button>
        </div>
      </nav>

      {/* Current Movies Section */}
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
              {/* Assuming movie.image holds the URL to the movie poster */}
              <img src={movie.image || 'default_poster.jpg'} alt="Movie Poster" style={{ width: '100%', borderRadius: '5px' }} />
              <h2 style={{ margin: '10px 0', fontSize: '20px' }}>{movie.name}</h2>
              <p style={{ margin: '0' }}>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react'
import { useParams } from 'react-router-dom'
import posterImage from './img/poster.jpg'

function MovieDetails() {
  const { movieId } = useParams()

  // Dummy data for Avengers: Endgame
  const avengersEndgame = {
    _id: '1',
    name: 'Avengers: Endgame',
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos's actions and restore balance to the universe.",
    locations: ['New York City', 'San Francisco'],
  }

  // Check if movieId is '1' (for Avengers: Endgame), otherwise, set movie to null
  // const movie = movieId === '1' ? avengersEndgame : null
  const movie = avengersEndgame

  if (!movie) {
    return <div>Movie not found</div>
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            marginBottom: '10px',
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
          }}
        >
          {movie.name}
        </h2>
        <img
          src={posterImage}
          alt="Movie Poster"
          style={{
            maxWidth: '100%',
            height: '250px',
            marginBottom: '20px',
            borderRadius: '5px',
          }}
        />
        <p
          style={{
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#666',
            textAlign: 'center',
            marginLeft: '20px',
            marginRight: '20px',
          }}
        >
          {movie.description}
        </p>
        <div>
          <strong style={{ fontSize: '18px', color: '#333' }}>
            Locations:
          </strong>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            {movie.locations.map((location, index) => (
              <li
                key={index}
                style={{ marginBottom: '5px', fontSize: '16px', color: '#666' }}
              >
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import posterImage from './img/poster.jpg';

// // function MovieDetails() {
// //   const { movieId } = useParams();
// //   const [movie, setMovie] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchMovie = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
// //         setMovie(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchMovie();
// //   }, [movieId]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   if (!movie) {
// //     return <div>Movie not found</div>;
// //   }

// //   return (
// //     <div
// //       style={{
// //         border: '1px solid #ccc',
// //         borderRadius: '5px',
// //         boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
// //         margin: '20px',
// //         padding: '20px',
// //         backgroundColor: '#fff',
// //       }}
// //     >
// //       <div
// //         style={{
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center',
// //         }}
// //       >
// //         <h2
// //           style={{
// //             marginBottom: '10px',
// //             fontSize: '24px',
// //             fontWeight: 'bold',
// //             textAlign: 'center',
// //             color: '#333',
// //           }}
// //         >
// //           {movie.name}
// //         </h2>
// //         <img
// //           src={movie.image || posterImage} // Use movie image if available, otherwise fallback to default
// //           alt={movie.name + " Poster"}
// //           style={{
// //             maxWidth: '100%',
// //             height: '250px',
// //             marginBottom: '20px',
// //             borderRadius: '5px',
// //           }}
// //         />
// //         <p
// //           style={{
// //             marginBottom: '20px',
// //             fontSize: '16px',
// //             lineHeight: '1.5',
// //             color: '#666',
// //             textAlign: 'center',
// //             marginLeft: '20px',
// //             marginRight: '20px',
// //           }}
// //         >
// //           {movie.description}
// //         </p>
// //         {movie.locations && (
// //           <div>
// //             <strong style={{ fontSize: '18px', color: '#333' }}>
// //               Locations:
// //             </strong>
// //             <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
// //               {movie.locations.map((location) => (
// //                 <li
// //                   style={{ marginBottom: '5px', fontSize: '16px', color: '#666' }}
// //                 >
// //                   {location}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MovieDetails;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import posterImage from './img/poster.jpg';

// function MovieDetails() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Access to navigation history

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
//         setMovie(response.data);
//         console.log(movie)
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchMovie();
//   }, [movieId]);

//   const handleLocationClick = (location) => {
//     navigate(`/location/${location}`); // Navigate to the "/location" route with the location parameter
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!movie) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <div
//       style={{
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
//         margin: '20px',
//         padding: '20px',
//         backgroundColor: '#fff',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <h2
//           style={{
//             marginBottom: '10px',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: '#333',
//           }}
//         >
//           {movie.name}
//         </h2>
//         <img
//           src={movie.image || posterImage} // Use movie image if available, otherwise fallback to default
//           alt={movie.name + " Poster"}
//           style={{
//             maxWidth: '100%',
//             height: '250px',
//             marginBottom: '20px',
//             borderRadius: '5px',
//           }}
//         />
//         <p
//           style={{
//             marginBottom: '20px',
//             fontSize: '16px',
//             lineHeight: '1.5',
//             color: '#666',
//             textAlign: 'center',
//             marginLeft: '20px',
//             marginRight: '20px',
//           }}
//         >
//           {movie.description}
//         </p>
//         {movie.locations && (
//           <div>
//             <strong style={{ fontSize: '18px', color: '#333' }}>
//               Locations:
//             </strong>
//             <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
//               {movie.locations.map((location, index) => (
//                 <li key={index} style={{ marginBottom: '5px', fontSize: '16px', color: '#666' }}>
//                   <button onClick={() => handleLocationClick(location)}>
//                     {location}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;
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
    navigate(`/location/${location}`);
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

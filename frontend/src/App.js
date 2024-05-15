import React, { useState } from 'react';
import './App.css';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; // Assuming you have a HomePage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import Navbar from './Navbar';


function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // Initialize currentPage to 'signup'
  const movies = [
    {
      "_id": "1",
      "name": "Interstellar",
      "description": "Interstellar is a science fiction film directed by Christopher Nolan...",
      "locations": ["New York City", "Los Angeles"]
    },
    {
      "_id": "2",
      "name": "Inception",
      "description": "Inception is a science fiction action film directed by Christopher Nolan...",
      "locations": ["Chicago", "London"]
    },
    // Add more movies as needed
  ];

  const user = { credits: 100 }; // Mock user data



  const handleTogglePage = () => {
    setCurrentPage('homepage'); // Set currentPage to 'homepage' to redirect
  };

  // If currentPage is 'homepage', redirect to HomePage component
  if (currentPage === 'homepage') {
    return <HomePage />;
  }

  return (
    // <div className="App">
    //   {currentPage === 'signup' ? (
    //     <SignupPage handleTogglePage={handleTogglePage} />
    //   ) : (
    //     <LoginPage handleTogglePage={handleTogglePage} />
    //   )}
    // </div>
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

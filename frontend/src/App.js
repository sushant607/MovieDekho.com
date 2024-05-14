import React, { useState } from 'react';
import './App.css';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; // Assuming you have a HomePage component

function App() {
  const [currentPage, setCurrentPage] = useState('signup'); // Initialize currentPage to 'signup'

  const handleTogglePage = () => {
    setCurrentPage('homepage'); // Set currentPage to 'homepage' to redirect
  };

  // If currentPage is 'homepage', redirect to HomePage component
  if (currentPage === 'homepage') {
    return <HomePage />;
  }

  return (
    <div className="App">
      {currentPage === 'signup' ? (
        <SignupPage handleTogglePage={handleTogglePage} />
      ) : (
        <LoginPage handleTogglePage={handleTogglePage} />
      )}
    </div>
  );
}

export default App;

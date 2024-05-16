import React, { useState } from 'react';
import './App.css';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './Movie';
import MovieDetails from './MovieDetails';
import About from './About';
import Navbar from './Navbar';
import SeatBookingL1 from './location-1';
import SeatBookingL2 from './location2';
import Payment from './Payment';
import TicketsPage from './tickets';
import AddCreditsForm from './addCredits';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails />}
          />
          <Route path="/addCredits" element={<AddCreditsForm/>}/>
          <Route path='/tickets' element={<TicketsPage/>}/>
          <Route path='/:movieName/Location-1' element={<SeatBookingL1/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/:movieId/Location-2' element={<SeatBookingL2/>} />
          <Route path='/payment/:ticketIds/:movie/:location' element={<Payment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

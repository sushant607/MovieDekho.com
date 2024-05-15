import React, { useState } from 'react';
import './Navbar.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { logout } from "./redux/store";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
function Navbar({ user }) {
    const [credits, setCredits] = useState(0);
    const username = localStorage.getItem("username");

axios.get('http://localhost:3000/user', { params: { username } }) 
  .then(response => {
     setCredits(response.data.credits);

  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching user details:', error);
  });

    const dispatch = useDispatch(); 
    const handleLogout = () => {
        try {
          dispatch(logout());
          alert("Logout Successfully");
          localStorage.clear();
          
          window.location.href = "/"; 
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MovieDekho.com</div>
      <div className="navbar-items">
        <ul>
          <li><Link to="/home">Movies</Link></li>
          <li>Credits: {credits}</li>
          <li><Link to="/search">Search Bar</Link></li> 
          <li>Add Credits</li>
          <li><Link to="/tickets">My Tickets</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li onClick={handleLogout}>Logout</li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

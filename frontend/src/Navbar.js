import React, { useState } from 'react';
import './Navbar.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { logout } from "./redux/store";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
function Navbar({ user }) {
    const [credits, setCredits] = useState(0);
    const username = localStorage.getItem("username");


// Make a GET request to fetch user details (corrected)
axios.get('http://localhost:3000/user', { params: { username } }) // Use GET for fetching data
  .then(response => {
    // Handle successful response
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
          <li><Link to="/home">Current movies</Link></li>
          <li>Display Credits: {credits}</li>
          <li><Link to="/search">Search Bar</Link></li> {/* Link to the search page */}
          <li>Add Credits</li>
          <li>My Tickets</li>
          <li onClick={handleLogout}>Logout</li> {/* Use onClick to trigger logout */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

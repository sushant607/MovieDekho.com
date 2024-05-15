import React from 'react';
import './Navbar.css'; // Create this CSS file for styling

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MovieDekho.com</div>
      <div className="navbar-items">
        <ul>
          <li>Current movies</li>
          <li>Display Credits: {user.credits}</li>
          <li>Search Bar</li>
          <li>Add Credits</li>
          <li>My Tickets</li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

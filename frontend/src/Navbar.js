import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const [credits, setCredits] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        setIsLoggedIn(!!username);

        if (username) {
            axios.get('http://localhost:3000/user', { params: { username } })
                .then(response => {
                    setCredits(response.data.credits);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, []);

    const handleLogout = () => {
        try {
            alert("Logged out successfully");
            localStorage.clear();
            setIsLoggedIn(false);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = () => {
        // Navigate to login page
        window.location.href = "/login";
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">MovieDekho.com</div>
            <div className="navbar-items">
                <ul>
                    <li><Link to="/home">Movies</Link></li>
                    {isLoggedIn && <li>Credits: {credits}</li>}
                    {isLoggedIn && <li><Link to="/addCredits">Add Credits</Link></li>}
                    {isLoggedIn && <li><Link to="/tickets">My Tickets</Link></li>}
                    <li><Link to="/about">About Us</Link></li>
                    {isLoggedIn ? (
                        <li onClick={handleLogout}>Logout</li>
                    ) : (
                        <li onClick={handleLogin}>Login</li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUsername = localStorage.getItem('username');
    setUsername(getUsername);
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (username) {
          const response = await axios.get(`http://localhost:3000/tickets?username=${username}`);
          setTickets(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
      }
    };

    fetchTickets();
  }, [username]);

  const cardStyle = {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '600px', 
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(500px, 1fr))', 
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <>
    <h1>My Tickets</h1>
    <div style={containerStyle}>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket._id} style={cardStyle}>
            <h2>{ticket.movieName}</h2>
            <p>Location: {ticket.location}</p>
            <p>Price: Rs {ticket.price}</p>
            <p>Seat Number: {ticket.seatNumber}</p>
          </div>
        ))
      ) : (
        <p>You have no tickets.</p>
      )}
    </div>
    </>
  );
};

export default TicketsPage;
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
          const response = await axios.get(`/tickets?username=${username}`);
          setTickets(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
      }
    };

    fetchTickets();
  }, [username]);

  return (
    <div>
      <h1>My Tickets</h1>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket._id}>
              <h2>{ticket.movieName}</h2>
              <p>Location: {ticket.location}</p>
              <p>Price: ${ticket.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no tickets.</p>
      )}
    </div>
  );
}

export default TicketsPage;

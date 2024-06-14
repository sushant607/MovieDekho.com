import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

  const generatePDF = (ticket) => {
    const doc = new jsPDF();
    doc.text('Ticket Details', 20, 10);

    const tableColumn = ["Movie Name", "Location", "Price", "Seat Number"];
    const tableRows = [
      [
        ticket.movieName,
        ticket.location,
        `Rs ${ticket.price}`,
        ticket.seatNumber
      ]
    ];

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save(`ticket_${ticket._id}.pdf`);
  };

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

  const buttonStyle = {
    backgroundColor: '#007bff',  /* Bootstrap primary blue color */
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',  /* Darker blue for hover state */
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
              <button
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                onClick={() => generatePDF(ticket)}
              >
                Generate PDF
              </button>
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

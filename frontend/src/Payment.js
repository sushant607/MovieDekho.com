import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Payment() {
  const { ticketIds, movie, location } = useParams();
  const [currentCredits, setCurrentCredits] = useState(0);
  const [applyStudentConcession, setApplyStudentConcession] = useState(false);
  const [idCardUploaded, setIdCardUploaded] = useState(false);
  const [ticketConfirmed, setTicketConfirmed] = useState(false);
  const [ticketIdArray, setTicketIdArray] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user', { params: { username } });
        setCurrentCredits(response.data.credits);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, [username]);

  useEffect(() => {
    if (ticketIds) {
      const ids = ticketIds.split(',');
      setTicketIdArray(ids);
    }
  }, [ticketIds]);

  const baseTicketPrice = 500; 

  const handleApplyConcessionChange = (event) => {
    setApplyStudentConcession(event.target.value === 'yes');
  };

  const handleConfirmTicket = async () => {
    const priceToDeductPerTicket = applyStudentConcession ? baseTicketPrice / 2 : baseTicketPrice;

    if (ticketIdArray.length === 0) {
      alert('Please select tickets to book.');
      return;
    }

    const totalTickets = ticketIdArray.length;
    const totalPrice = totalTickets * priceToDeductPerTicket;

    if (currentCredits >= totalPrice) {
      if (applyStudentConcession && !idCardUploaded) {
        alert('Please upload your student ID card.');
        return;
      }

      const bookedTickets = [];
      try {
        for (const ticketId of ticketIdArray) {
          const response = await axios.post('/bookTicket', {
            movieName: movie,
            location,
            price: priceToDeductPerTicket,
            userId: username,
            seatNumber: ticketId,
          });
          bookedTickets.push(response.data.ticket); // Add booked ticket details
        }

        const updateCreditsResponse = await axios.post('/updateCredits', {
          username,
          amount: -totalPrice,
        });

        setCurrentCredits(currentCredits - totalPrice);
        setTicketConfirmed(true);
        alert(`Tickets booked successfully! (x${totalTickets})`);
      } catch (error) {
        console.error('Error booking tickets:', error);
        alert('Failed to book tickets. Please try again.');
      }
    } else {
      alert('Insufficient credits to purchase the tickets.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Payment for Tickets {ticketIds}</h2>
      <div>
        <p>Current Credits: {currentCredits}</p>
        <p>Required Credits to Buy Tickets: {ticketIdArray.length * (applyStudentConcession ? baseTicketPrice / 2 : baseTicketPrice)}</p>
      </div>
      <div>
        <label>
          Apply for Student Concession:
          <select value={applyStudentConcession ? 'yes' : 'no'} onChange={handleApplyConcessionChange} style={{ marginLeft: '10px' }}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {applyStudentConcession && (
          <div>
            <p>Upload Student ID Card:</p>
            <input type="file" onChange={() => setIdCardUploaded(true)} />
          </div>
        )}
      </div>
      <button onClick={handleConfirmTicket} style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Confirm Ticket
      </button>
      {ticketConfirmed && (
        <button onClick={() => alert('Downloading ticket...')} style={{ backgroundColor: '#008CBA', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Download Ticket
        </button>
      )}
    </div>
  );
}

export default Payment;

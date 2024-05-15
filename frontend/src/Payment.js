import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Payment() {
  const { ticketId, movie, location } = useParams();
  const [currentCredits, setCurrentCredits] = useState(0) 
  const [applyStudentConcession, setApplyStudentConcession] = useState(false)
  const [idCardUploaded, setIdCardUploaded] = useState(false)
  const [ticketConfirmed, setTicketConfirmed] = useState(false)
  const username = localStorage.getItem("username");

axios.get('http://localhost:3000/user', { params: { username } }) 
  .then(response => {
    setCurrentCredits(response.data.credits);

  })
  .catch(error => {
    console.error('Error fetching user details:', error);
  });

  const ticketPrice = 500 

  const handleApplyConcessionChange = (event) => {
    setApplyStudentConcession(event.target.value === 'yes')
  }

  const handleConfirmTicket = () => {
    const priceToDeduct = applyStudentConcession ? 250 : 500; // Using the provided values
  
    if (currentCredits >= priceToDeduct) {
      if (applyStudentConcession && !idCardUploaded) {
        alert('Please upload your student ID card.');
        return; // Stop execution if the ID is not uploaded
      } 
  
      // Send the request to the backend to update the user's credits
      axios.post('/updateCredits', {
        username: username, // Replace with actual username data if available
        amount: -priceToDeduct // Deducting the credits
      }).then(response => {
        alert(`Credits updated successfully.`);
        setCurrentCredits(currentCredits - priceToDeduct);
        
        // Now book the ticket after updating credits
        axios.post('/bookTicket', {
          movieName: movie, // Replace with actual movie name
          location: location, // Replace with actual location
          price: priceToDeduct, // Price after concession if applicable
          userId: username // Or another user identifier if available
        }).then(response => {
          alert('Ticket booked successfully.');
          setTicketConfirmed(true);
        }).catch(error => {
          console.error('Error booking ticket:', error);
          alert('Failed to book ticket. Please try again.');
        });
  
      }).catch(error => {
        console.error('Error updating credits:', error);
        alert('Failed to update credits. Please try again.');
      });
    } else {
      alert('Insufficient credits to purchase the ticket.');
    }
  };

  const handleDownloadTicket = () => {
    alert('Downloading ticket...')
  }

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }

  const downloadButtonStyle = {
    backgroundColor: '#008CBA',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2>Payment for Ticket {ticketId}</h2>
      <div style={{ marginBottom: '20px' }}>
        <p>Current Credits: {currentCredits}</p>
        <p>
          Required Credits to Buy Ticket:{' '}
          {applyStudentConcession ? ticketPrice / 2 : ticketPrice}
        </p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Apply for Student Concession:
          <select
            value={applyStudentConcession ? 'yes' : 'no'}
            onChange={handleApplyConcessionChange}
            style={{ marginLeft: '10px' }}
          >
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
      <button style={buttonStyle} onClick={handleConfirmTicket}>
        Confirm Ticket
      </button>
      {ticketConfirmed && (
        <button style={downloadButtonStyle} onClick={handleDownloadTicket}>
          Download Ticket
        </button>
      )}
    </div>
  )
}

export default Payment

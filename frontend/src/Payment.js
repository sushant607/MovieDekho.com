import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Payment() {
  const { ticketId } = useParams()
  const [currentCredits, setCurrentCredits] = useState(1000) // Example initial credits
  const [applyStudentConcession, setApplyStudentConcession] = useState(false)
  const [idCardUploaded, setIdCardUploaded] = useState(false)
  const [ticketConfirmed, setTicketConfirmed] = useState(false)

  const ticketPrice = 500 // Example ticket price

  const handleApplyConcessionChange = (event) => {
    setApplyStudentConcession(event.target.value === 'yes')
  }

  const handleConfirmTicket = () => {
    if (currentCredits >= ticketPrice) {
      if (applyStudentConcession && !idCardUploaded) {
        alert('Please upload your student ID card.')
      } else {
        setCurrentCredits(
          currentCredits -
            (applyStudentConcession ? ticketPrice / 2 : ticketPrice)
        )
        setTicketConfirmed(true)
      }
    } else {
      alert('Insufficient credits to purchase the ticket.')
    }
  }

  const handleDownloadTicket = () => {
    // Dummy download ticket functionality
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/addCredits.css'
function AddCreditsForm() {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const usernameFromStorage = localStorage.getItem('username');
    if (usernameFromStorage) {
      setUsername(usernameFromStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('/updateCredits', {
        username,
        amount,
      });

      setSuccessMessage('Credits added successfully!');
      setAmount(0);
    } catch (error) {
      console.error('Error adding credits:', error);
      setErrorMessage(error.message || 'An error occurred while adding credits.');
    }
  };

  return (
    <div className="add-credits">
      <h2>Add Credits</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="user-info">
        <p>Username:</p>
        <span>{username}</span>
      </div>
      <div className="amount-input">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          min="1"
          required
          placeholder="Enter amount"
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Add Credits</button>
    </div>
  );
}

export default AddCreditsForm;

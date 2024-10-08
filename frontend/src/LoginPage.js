import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from './redux/store';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleMode = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/login', { username, password });

      if (data.token) { // Backend should return a token if login is successful
        localStorage.setItem("token", data.token); // Store the JWT token
        localStorage.setItem("username", username); // Store the username
        dispatch(login()); // Dispatch login action to update Redux state
        alert("Login successful");
        navigate('/home'); // Redirect to home page
      }
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username:</label>
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <button
            onClick={handleToggleMode}
            style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#007bff' }}
          >
            Create an Account
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

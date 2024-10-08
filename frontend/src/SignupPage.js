import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:4000/signup', formData);
      if (response.data.token) {
        alert('User created successfully');
        navigate('/login'); // Redirect to login page after successful sign-up
      }
    } catch (error) {
      console.error(error);
      alert('Failed to register user');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1>Create an Account</h1>
        <form onSubmit={handleSignup} style={{ marginBottom: '15px' }}>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Age:
            </label>
            <input
              type="number"
              name="age"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label style={{ fontWeight: 'bold' }}>Gender:</label>
            <select
              name="gender"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
                marginBottom: '10px',
              }}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: 'bold',
              }}
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already a user?{' '}
          <button
            onClick={() => navigate('/login')}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: '#007bff',
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

import React from 'react'

function SignupPage({ handleTogglePage }) {
  const handleToggleMode = () => {
    handleTogglePage() // This calls the function passed as a prop to toggle pages
  }

  const handleSignup = () => {
    // Your signup logic goes here
    handleToggleMode() // Call handleToggleMode to toggle pages after signup
  }

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
              Gender:
            </label>
            <input
              type="text"
              name="gender"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
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
            onClick={handleSignup} // Call handleSignup function on button click
          >
            Sign Up
          </button>
        </form>
        <p>
          Already a user?{' '}
          <button
            onClick={handleToggleMode}
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
  )
}

export default SignupPage

import React from 'react'

function LoginPage({ handleToggleMode }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login
    console.log('Login form submitted')
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
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
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
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <button
            onClick={handleToggleMode}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: '#007bff',
            }}
          >
            Create an Account
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
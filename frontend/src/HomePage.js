import React from 'react'

function HomePage({ handleLogout }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle search functionality here
  }

  return (
    <div
      style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: '#fff',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '24px',
              margin: '0',
            }}
          >
            MovieDekho.com
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form onSubmit={handleSubmit} style={{ marginRight: '10px' }}>
            <input
              type="text"
              placeholder="Search"
              style={{ padding: '8px', borderRadius: '5px', border: 'none' }}
            />
            <button
              type="submit"
              style={{
                marginLeft: '5px',
                padding: '8px 12px',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </form>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: 'transparent',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>My Credits</h2>
          {/* Content for My Credits */}
        </div>
        <div
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>Add Credits</h2>
          {/* Content for Add Credits */}
        </div>
        <div
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0' }}>My Tickets</h2>
          {/* Content for My Tickets */}
        </div>
      </div>

      {/* Current Movies Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ width: '70%', margin: '0 auto' }}>
            {/* Movie Poster */}
            <img
              src="poster.jpg"
              alt="Movie Poster"
              style={{ width: '100%', borderRadius: '5px' }}
            />
            <h2 style={{ margin: '10px 0', fontSize: '20px' }}>Movie 1</h2>
            <p style={{ margin: '0' }}>Short description of the movie...</p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ width: '70%', margin: '0 auto' }}>
            {/* Movie Poster */}
            <img
              src="./poster.jpg"
              alt="Movie Poster"
              style={{ width: '100%', borderRadius: '5px' }}
            />
            <h2 style={{ margin: '10px 0', fontSize: '20px' }}>Movie 2</h2>
            <p style={{ margin: '0' }}>Short description of the movie...</p>
          </div>
        </div>
        {/* Card 3 */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            width: '30%',
            minWidth: '200px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ width: '70%', margin: '0 auto' }}>
            {/* Movie Poster */}
            <img
              src="poster.jpg"
              alt="Movie Poster"
              style={{ width: '100%', borderRadius: '5px' }}
            />
            <h2 style={{ margin: '10px 0', fontSize: '20px' }}>Movie 3</h2>
            <p style={{ margin: '0' }}>Short description of the movie...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

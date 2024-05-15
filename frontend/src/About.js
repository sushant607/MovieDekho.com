import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          Welcome to MovieDekho.com
      </h1>
      <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#666' }}>
        We are passionate developers dedicated to making your movie experience
        as enjoyable as possible. Whether you're booking tickets or browsing for
        movie information, we strive to provide a seamless and user-friendly
        platform.
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#666' }}>
        <strong>Contact Us:</strong>
        <br />
        Parth: Too busy to talk
        <br />
        Mohammed: Too useless to talk
        <br />
        Sushant:{' '}
        <a
          href="https://www.linkedin.com/in/sushant-bagul-518ab3204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </p>
    </div>
  )
}

export default About

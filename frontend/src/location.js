import React, { useState } from 'react';
import seatImage from './img/seats.png'; // Import the PNG image for the seat

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleSeatSelection = (row, seat) => {
    const isSelected = selectedSeats.some(
      selectedSeat => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(
        selectedSeat => !(selectedSeat.row === row && selectedSeat.seat === seat)
      ));
      setTotalCost(totalCost - 200);
    } else {
      setSelectedSeats([...selectedSeats, { row, seat }]);
      setTotalCost(totalCost + 200);
    }
  };

  const getSeatLabel = (row, seat) => {
    const alphabet = String.fromCharCode(65 + seat - 1);
    return `${alphabet}${row}`;
  };

  const seatButtonStyle = {
    margin: '5px',
    padding: 0,
    border: 'none',
    background: 'none',
    outline: 'none',
    textAlign: 'center',
    backgroundColor: 'green' // Initially set to green
  };

  const seatImageStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Seat Booking</h2>
      <div style={{ display: 'inline-block' }}>
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <div key={rowIndex}>
            {Array.from({ length: 8 }, (_, seatIndex) => {
              const isSelected = selectedSeats.some(seat => seat.row === rowIndex + 1 && seat.seat === seatIndex + 1);
              return (
                <button
                  key={seatIndex}
                  onClick={() => handleSeatSelection(rowIndex + 1, seatIndex + 1)}
                  disabled={isSelected}
                  style={{ ...seatButtonStyle, backgroundColor: isSelected ? 'green' : 'none' }}
                >
                  <img src={seatImage} alt="seat" style={seatImageStyle} />
                  <div>{getSeatLabel(rowIndex + 1, seatIndex + 1)}</div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Total Cost: ${totalCost}</h3>
        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background-color 0.3s ease' }} onClick={() => alert('Payment Successful!')}>Pay</button>
      </div>
    </div>
  );
};

export default SeatBooking;

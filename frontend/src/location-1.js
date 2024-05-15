
import React, { useState, useEffect } from 'react';
import seatImage from './img/seats.png';

const SeatBookingL1 = () => {
  const locationName = "Location-1"; // Hardcoded location name
  const [location, setLocation] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`http://localhost:4000/location/${locationName}`);
        if (!response.ok) {
          throw new Error(`Error fetching location data: ${response.statusText}`);
        }
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, [locationName]);

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

  const updateSeatOccupancy = async () => {
    if (!location) return;
    const updatedOccupancy = location.seatOccupancy.map((row, rowIndex) =>
      row.map((seat, seatIndex) => {
        return selectedSeats.some(s => s.row === rowIndex + 1 && s.seat === seatIndex + 1) || seat;
      })
    );

    try {
      const response = await fetch(`http://localhost:4000/location/${location.name}/occupancy`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ seatOccupancy: updatedOccupancy })
      });
      if (!response.ok) {
        throw new Error(`Error updating seat occupancy: ${response.statusText}`);
      }
      const data = await response.json();
      setLocation(data);
      alert('Payment Successful!');
    } catch (error) {
      console.error('Error updating seat occupancy:', error);
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

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Seat Booking for {location.name}</h2>
      <div style={{ display: 'inline-block' }}>
        {location.seatMatrix.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((seat, seatIndex) => {
              const isSelected = selectedSeats.some(s => s.row === rowIndex + 1 && s.seat === seatIndex + 1);
              const isOccupied = location.seatOccupancy[rowIndex][seatIndex];
              return (
                <button
                  key={seatIndex}
                  onClick={() => handleSeatSelection(rowIndex + 1, seatIndex + 1)}
                  disabled={isOccupied}
                  style={{ ...seatButtonStyle, backgroundColor: isSelected ? 'green' : isOccupied ? 'red' : 'none' }}
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
        <button 
          style={{ 
            backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', 
            padding: '10px 20px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
            transition: 'background-color 0.3s ease' 
          }} 
          onClick={updateSeatOccupancy}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default SeatBookingL1;


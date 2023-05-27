import React, { useState } from 'react';

const SeatSelectionPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Función para manejar el clic en un asiento
  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // El asiento ya está seleccionado, deseleccionarlo
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      // El asiento no está seleccionado, agregarlo a los asientos seleccionados
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Datos de los asientos disponibles (pueden provenir de una API o estar predefinidos)
  const availableSeats = [
    { id: 1, seatNumber: 'A1' },
    { id: 2, seatNumber: 'A2' },
    { id: 3, seatNumber: 'B1' },
    // ...
  ];

  return (
    <div>
      <h1>Selecciona tus asientos</h1>
      <div className="seat-container">
        {availableSeats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelectionPage;
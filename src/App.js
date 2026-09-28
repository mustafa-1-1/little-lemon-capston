import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './App.css';

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const updateTimes = (selectedDate) => {
    // Dynamic available times update
    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00']);
  };

  return (
    <div className="App">
      <header>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
      </header>

      <main>
        <h2>Reserve a Table</h2>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
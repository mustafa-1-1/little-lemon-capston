import React, { useState } from 'react';

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitted, setSubmitted] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (updateTimes) {
      updateTimes(selectedDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="confirmation-message" aria-live="polite">
        <h2>Booking Confirmed!</h2>
        <p>
          Thank you! Your reservation for <strong>{guests}</strong> guest(s) on{' '}
          <strong>{date}</strong> at <strong>{time}</strong> ({occasion}) has been received.
        </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Table Booking Form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Select booking time"
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-label="Number of guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Select occasion"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation form"
      />
    </form>
  );
}

export default BookingForm;
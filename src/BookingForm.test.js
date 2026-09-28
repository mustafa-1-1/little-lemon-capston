import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm labels correctly', () => {
  const availableTimes = ['17:00', '18:00'];
  render(<BookingForm availableTimes={availableTimes} />);

  const dateLabel = screen.getByText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText(/Choose time/i);
  expect(timeLabel).toBeInTheDocument();
});
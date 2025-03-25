import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <button onClick={() => alert('RSVP functionality coming soon!')}>RSVP</button>
    </div>
  );
};

export default EventDetails;
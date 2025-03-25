import React, { useState, useEffect } from 'react';


const Home = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '', location: '', description: '' });
  const [filter, setFilter] = useState('All');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location || !newEvent.description) {
      setMessage('Please fill in all fields.');
      return;
    }
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', date: '', category: '', location: '', description: '' });
    setMessage('Event added successfully!');

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <div className="app">
      <section id="events" className="event-listing">
        <h2>Events</h2>
        <label>
          Filter by Category:
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </label>
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </li>
          ))}
        </ul>

        <h3>Add New Event</h3>
        {message && <p>{message}</p>}
        <form onSubmit={addEvent}>
          <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} required />
 <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required />
          <input type="text" name="location" placeholder="Event Location" value={newEvent.location} onChange={handleInputChange} required />
          <textarea name="description" placeholder="Event Description" rows="5" cols="86" value={newEvent.description} onChange={handleInputChange} required />
          <select name="category" value={newEvent.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button type="submit">Add Event</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
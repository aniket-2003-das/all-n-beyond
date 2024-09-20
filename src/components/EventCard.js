// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, date, ID, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{date}</p>
      <p className="text-gray-400 mb-2">{ID}</p>
      <p className="text-sm mb-4">{description}</p>
      <a href="https://forms.gle/WzgRVLWhXo4wXv5G9" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Register</a>
    </div>
  );
};

export default EventCard;
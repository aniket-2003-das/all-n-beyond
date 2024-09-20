// src/components/TeamMemberCard.js
// src/components/TeamMemberCard.js
import React from 'react';
import LazyImage from './LazyImage';

const TeamMemberCard = ({ name, title, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <LazyImage src={imageUrl} alt={name} className="w-36 h-42 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-2">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default TeamMemberCard;
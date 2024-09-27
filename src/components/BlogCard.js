// src/components/BlogCard.js
import React from 'react';

const BlogCard = ({ title, author, blog}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">- {author}</p>
        <p className="text-sm mb-4">{blog}</p>
        <a href="https://www.linkedin.com/groups/14514836/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        
          Read more {'>'}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
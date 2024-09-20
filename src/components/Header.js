// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">All n Beyond</Link>
        <div>
          <Link to="/" className="px-3 py-2 rounded hover:bg-gray-800">Home</Link>
          <Link to="/about" className="px-3 py-2 rounded hover:bg-gray-800">About</Link>
          <Link to="/blog" className="px-3 py-2 rounded hover:bg-gray-800">Blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
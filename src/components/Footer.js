// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <a href="https://forms.gle/zqmy8qQXyWnEkquQ7" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition duration-300">Contact Form</a>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/104449215" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition duration-300">LinkedIn</a>
              <a href="https://github.com/All-n-Beyond" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition duration-300">GitHub</a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy;All-n-Beyond 2024.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
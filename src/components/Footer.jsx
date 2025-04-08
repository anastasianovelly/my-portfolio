// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Using footer semantic tag
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto"> {/* mt-auto pushes footer down in flex container */}
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Anastasia's Portfolio. All rights reserved.</p>
        {/* You can add more links or information here if needed */}
        {/* Example: */}
        {/* <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <span className="text-gray-500">|</span>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
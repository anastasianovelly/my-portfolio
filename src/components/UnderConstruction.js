import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-8xl mb-8 animate-bounce">
        🚧
      </div>
      <h1 className="text-3xl font-bold mb-4">Page Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">This page is currently being built. Please check back later.</p>
      <Link 
        to="/"
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default UnderConstruction;

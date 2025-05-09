import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found ontainer mx-auto p-4 h-screen flex flex-col justify-center items-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="back-home">Back to Home</Link>
    </div>
  );
}

export default NotFound;

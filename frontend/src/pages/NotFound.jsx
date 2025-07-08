import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600">Page Not Found</p>
      <a href="/" className="text-blue-500 underline mt-2">Go to Homepage</a>
    </div>
  );
};

export default NotFound;
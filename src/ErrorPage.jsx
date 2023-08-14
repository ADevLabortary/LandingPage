import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-500 text-white">
      <h1 className="text-6xl font-medium mt-4">Oops!</h1>
      <h2 className="text-4xl font-medium mt-4">Something Went Wrong!</h2>
      <p className="text-xl font-medium mt-4">Sorry, the page you are looking for cannot be found.</p>
    </div>
  );
}

export default ErrorPage;

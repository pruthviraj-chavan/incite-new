import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome Home</h1>
        <p className="text-lg text-gray-600">
          This is the home page of your application.
        </p>
      </div>
    </div>
  );
};

export default Home;
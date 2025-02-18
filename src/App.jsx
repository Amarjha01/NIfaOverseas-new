import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">MyApp</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-4xl md:text-6xl font-bold">Welcome to MyApp</h2>
        <p className="mt-4 text-lg md:text-xl">Building responsive applications with Tailwind CSS</p>
      </header>
      
      {/* Content Grid */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Feature 1</h3>
          <p className="mt-2 text-gray-600">Description of feature 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Feature 2</h3>
          <p className="mt-2 text-gray-600">Description of feature 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Feature 3</h3>
          <p className="mt-2 text-gray-600">Description of feature 3.</p>
        </div>
      </section>
    </div>
  );
};

export default App;

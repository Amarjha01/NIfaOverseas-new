import React from 'react';

const Story = () => {
  return (
    <div className="overflow-hidden">
      
      {/* Hero Section with Split Screen */}
      <div className="relative w-full h-screen mt-10 flex items-center justify-between px-6 sm:px-10 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="relative w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}></div>
        <div className="relative w-1/2 h-full flex flex-col justify-center px-12 text-center">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">Our Story – Preserving India’s Artisan Heritage</h1>
          <p className="text-xl sm:text-2xl mb-8">
            At Nifa Overseas, we take immense pride in supporting and empowering Indian artisans. Many of our craftsmen come from families with generations of metalworking experience, and by partnering with them, we help preserve this dying art form.
          </p>
          <a href="#join-us" className="bg-teal-700 text-white py-3 px-6 text-2xl rounded-lg shadow-md hover:bg-teal-800 transition duration-300">Join Our Mission</a>
        </div>
      </div>

      {/* Diagonal Split Section */}
      <div className="relative w-full py-36 text-white px-6 sm:px-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-900 opacity-80"></div>
        <div className="relative z-10">
          <div className="relative w-full flex items-center justify-between bg-gradient-to-l from-yellow-500 to-orange-500 p-6 sm:p-10 rounded-3xl shadow-lg transform -skew-x-12">
            <div className="text-center w-full sm:w-1/2 sm:text-left">
              <h2 className="text-5xl font-semibold mb-8">Empowering Indian Artisans</h2>
              <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8">
                With the rise of mass production and machine-made goods, handcrafted products are becoming rare. We are committed to ensuring that these skills continue to thrive, providing fair wages, ethical work conditions, and access to the global market for our artisans.
              </p>
            </div>
            <div className="relative w-full sm:w-1/2 h-80 sm:h-auto">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Scrolling Section */}
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-48 px-6 sm:px-10">
          <h2 className="text-6xl sm:text-7xl font-bold mb-6">Craftsmanship, Tradition & Sustainability</h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
            By choosing Nifa Overseas, you are not just buying décor—you are investing in craftsmanship, tradition, and sustainability. Our artisans' skills reflect generations of knowledge, and your purchase helps preserve this heritage.
          </p>
        </div>
      </div>

      {/* Transparent Overlay with Text Over Image */}
      <div className="relative w-full bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white py-48 px-6 sm:px-10">
          <h2 className="text-6xl sm:text-7xl font-extrabold mb-6">Join Us in Our Mission</h2>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
            Help us continue supporting these incredible artisans and keeping their traditions alive. Together, we can make a difference and preserve the craftsmanship of generations.
          </p>
          <a href="#support-us" className="bg-teal-700 text-white py-3 px-6 text-2xl rounded-lg shadow-md hover:bg-teal-800 transition duration-300">Support Artisan Communities</a>
        </div>
      </div>

    </div>
  );
};

export default Story;

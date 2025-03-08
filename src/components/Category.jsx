

const Category = () => {
  return (
    <div className="py-16 px-6 sm:px-10 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-700 mb-6">
          Our Handmade Product Categories
        </h2>
        <p className="text-xl text-gray-600 mx-auto max-w-3xl">
          Discover our diverse range of handcrafted metal décor, perfect for adding a unique touch to any space.
        </p>
      </div>

      {/* Category 1: Handmade Metal Bells */}
      <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Handmade Metal Bells</h3>
          <p className="text-lg mb-6">
            Timeless designs perfect for holiday décor, home interiors, and spiritual settings.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🔔</span>
          </div>
        </div>
      </div>

      {/* Category 2: Rustic Hanging Bells */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Rustic Hanging Bells</h3>
          <p className="text-lg mb-6">
            Festive and traditional, ideal for Christmas and seasonal decorations.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🎄</span>
          </div>
        </div>
      </div>

      {/* Category 3: Vintage & Shabby Chic Bells */}
      <div className="relative bg-gradient-to-r from-gray-600 to-gray-800 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Vintage & Shabby Chic Bells</h3>
          <p className="text-lg mb-6">
            Aged and distressed finishes for a charming countryside appeal.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🏡</span>
          </div>
        </div>
      </div>

      {/* Category 4: Hanging Cluster Bells */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Hanging Cluster Bells</h3>
          <p className="text-lg mb-6">
            Artistic décor for indoor and outdoor ambiance.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🌿</span>
          </div>
        </div>
      </div>

      {/* Category 5: Custom Metal Home Décor */}
      <div className="relative bg-gradient-to-r from-teal-800 to-teal-900 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Custom Metal Home Décor</h3>
          <p className="text-lg mb-6">
            Private label and branding options for retailers and wholesalers.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🏷️</span>
          </div>
        </div>
      </div>

      {/* Category 6: Festive & Event Décor Bells */}
      <div className="relative bg-gradient-to-r from-amber-400 to-amber-600 text-white py-24 px-8 mb-16 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1600x800')" }}></div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Festive & Event Décor Bells</h3>
          <p className="text-lg mb-6">
            Perfect for Christmas, weddings, and large-scale seasonal décor projects.
          </p>
          <div className="flex justify-center">
            <span className="text-6xl">🎉</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

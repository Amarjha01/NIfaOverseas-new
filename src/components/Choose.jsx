import React from 'react';

const Choose = () => {
  return (
    <div className="bg-gradient-to-r mt-10 from-teal-100 via-blue-200 to-teal-300 py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">Why Choose Nifa Overseas?</h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          With over 20 years of experience, Nifa Overseas is your trusted partner in providing high-quality handcrafted metal décor and custom solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">🌍</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Expert Handmade Manufacturers</h3>
          </div>
          <p className="text-lg text-gray-700">
            With over 20 years of artisan experience, we specialize in crafting high-quality, bespoke metal décor that fits your unique needs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">💰</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Wholesale Pricing & Bulk Discounts</h3>
          </div>
          <p className="text-lg text-gray-700">
            We offer competitive rates and bulk discounts for buyers of all sizes, from small boutiques to large wholesalers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">🚀</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Fast Global Shipping</h3>
          </div>
          <p className="text-lg text-gray-700">
            Enjoy secure and timely deliveries across the USA, Europe, and worldwide, ensuring your products reach you on time, every time.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">🔖</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Custom Orders & Branding</h3>
          </div>
          <p className="text-lg text-gray-700">
            Get your logo, labels, and exclusive designs tailored to your needs, ensuring your brand stands out with every product.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">📦</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Ethical & Sustainable Production</h3>
          </div>
          <p className="text-lg text-gray-700">
            We pride ourselves on using eco-friendly materials and supporting local Indian artisans, ensuring a responsible production process.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-indigo-600 mr-4">✅</span>
            <h3 className="text-2xl font-semibold text-indigo-700">Private-Label & Custom Branding Solutions</h3>
          </div>
          <p className="text-lg text-gray-700">
            Looking to sell under your own brand? We offer custom logo branding, private-label packaging, and exclusive product modifications to create a unique, market-ready collection for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;

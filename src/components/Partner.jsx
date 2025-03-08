import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { height: 0, width: 0, opacity: 0 },
      {
        delay:5,
        height: "auto",
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          // toggleActions: "play none none none",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="bg-white w-full py-20 px-6 md:px-12 lg:px-24 text-gray-900 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Partner with Us – Let’s Grow Together!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          We believe in building long-lasting relationships with our partners. Together, we can achieve great success.
        </p>

        {/* Content Section */}
        <div className="bg-gray-50 text-gray-800 py-8 px-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <p className="text-xl font-medium mb-6 text-gray-800">
            Whether you are a small business owner, wholesaler, distributor, or global trade buyer, we provide:
          </p>
          <ul className="space-y-4 text-lg md:text-xl list-none">
            <li className="flex items-center space-x-3">
              <span className="text-green-500 text-2xl">✔</span>
              <span>Low MOQ & Bulk Order Discounts</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500 text-2xl">✔</span>
              <span>Private Labeling & Custom Branding</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500 text-2xl">✔</span>
              <span>Reliable International Shipping</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500 text-2xl">✔</span>
              <span>Sustainable, Handmade Products</span>
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12">
          <p className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">
            📩 Contact Us Today! Let’s discuss how we can help grow your business with authentic, handcrafted décor.
          </p>
          <p className="text-lg md:text-xl italic text-gray-500">
            🌍 Nifa Overseas – Bringing Handmade Heritage to the World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
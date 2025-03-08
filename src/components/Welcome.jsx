import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-9xl font-bold text-gray-900 leading-tight">
          Nifa Overseas
        </h1>
        <p className="mt-4 text-lg md:text-3xl text-gray-700">
          Leading Manufacturer & Exporter of Handmade Metal Bells & Home Décor
        </p>
        <p className="mt-6 text-gray-600 text-md md:text-lg">
          Crafted with passion in India since 2020, our handmade metal décor and rustic bells blend heritage, sustainability, and craftsmanship. Every piece embodies centuries-old artisan traditions, ensuring authenticity and unmatched quality.
        </p>
        <p className="mt-4 text-gray-600 text-md md:text-lg">
          Serving wholesalers, retailers, e-commerce sellers, and interior designers across the USA, Europe, and beyond with eco-friendly, handcrafted home accents perfect for Christmas and rustic settings.
        </p>
        <p className="mt-6 text-xl text-gray-800 font-semibold italic">
          ✨ Every piece we offer is not just a product—it’s a story of skill, heritage, and sustainability. ✨
        </p>
      </div>
    </section>
  );
};

export default Welcome;

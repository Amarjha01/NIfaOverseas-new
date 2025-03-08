import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background Scaling Effect
    tl.fromTo(
      heroRef.current,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
    );

    // Staggered Text Reveal
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.3,
        }
      );
    });

    // Floating Animation for Subtle Motion
    gsap.to(textRefs.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white"
    >
      <div className="max-w-5xl">
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-5xl md:text-9xl font-extrabold leading-tight uppercase"
        >
          Nifa Overseas
        </h1>
        <p
          ref={(el) => (textRefs.current[1] = el)}
          className="mt-4 text-lg md:text-3xl font-light"
        >
          Leading Manufacturer & Exporter of Handmade Metal Bells & Home Décor
        </p>
        <p
          ref={(el) => (textRefs.current[2] = el)}
          className="mt-6 text-md md:text-lg text-gray-200"
        >
          Crafted with passion in India since 2020, our handmade metal décor and rustic bells blend heritage, sustainability, and craftsmanship. Every piece embodies centuries-old artisan traditions, ensuring authenticity and unmatched quality.
        </p>
        <p
          ref={(el) => (textRefs.current[3] = el)}
          className="mt-4 text-md md:text-lg text-gray-200"
        >
          Serving wholesalers, retailers, e-commerce sellers, and interior designers across the USA, Europe, and beyond with eco-friendly, handcrafted home accents perfect for Christmas and rustic settings.
        </p>
        <p
          ref={(el) => (textRefs.current[4] = el)}
          className="mt-6 text-xl font-semibold italic"
        >
          ✨ Every piece we offer is not just a product—it’s a story of skill, heritage, and sustainability. ✨
        </p>
      </div>
    </section>
  );
};

export default Welcome;

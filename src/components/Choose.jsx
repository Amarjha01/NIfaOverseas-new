import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%", // Starts when heading is just inside viewport
        toggleActions: "play none none none",
      },
    });

    // Paragraph Animation
    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 95%", // Delayed slightly after heading
        toggleActions: "play none none none",
      },
    });

    // Feature Boxes Animation
    gsap.from(".feature-box", {
      y: 120, // Increased for a noticeable reveal effect
      opacity: 0,
      stagger: 0.3, // Smooth overlapping animations
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Ensures animation happens after entering viewport
        end: "bottom 50%",
        scrub: true, // Smoothens the effect
        // markers:true
      },
    },"-=0.5");
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r mt-10 from-teal-100 via-blue-200 to-teal-300 py-16 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 ref={headingRef} className="text-4xl font-extrabold text-indigo-700 mb-4">
          Why Choose Nifa Overseas?
        </h2>
        <p ref={paragraphRef} className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          With over 20 years of experience, Nifa Overseas is your trusted partner in providing high-quality handcrafted metal décor and custom solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { icon: "🌍", title: "Expert Handmade Manufacturers", text: "With over 20 years of artisan experience, we specialize in crafting high-quality, bespoke metal décor that fits your unique needs." },
          { icon: "💰", title: "Wholesale Pricing & Bulk Discounts", text: "We offer competitive rates and bulk discounts for buyers of all sizes, from small boutiques to large wholesalers." },
          { icon: "🚀", title: "Fast Global Shipping", text: "Enjoy secure and timely deliveries across the USA, Europe, and worldwide, ensuring your products reach you on time, every time." },
          { icon: "🔖", title: "Custom Orders & Branding", text: "Get your logo, labels, and exclusive designs tailored to your needs, ensuring your brand stands out with every product." },
          { icon: "📦", title: "Ethical & Sustainable Production", text: "We pride ourselves on using eco-friendly materials and supporting local Indian artisans, ensuring a responsible production process." },
          { icon: "✅", title: "Private-Label & Custom Branding Solutions", text: "Looking to sell under your own brand? We offer custom logo branding, private-label packaging, and exclusive product modifications to create a unique, market-ready collection for your business." }
        ].map((item, index) => (
          <div key={index} className="feature-box bg-white rounded-lg shadow-lg p-8 text-left">
            <div className="flex items-center mb-4">
              <span className="text-4xl text-indigo-600 mr-4">{item.icon}</span>
              <h3 className="text-2xl font-semibold text-indigo-700">{item.title}</h3>
            </div>
            <p className="text-lg text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;

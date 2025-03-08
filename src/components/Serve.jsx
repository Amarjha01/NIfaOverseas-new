import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Serve = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Paragraph animation
    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Section animation
    gsap.from(".serve-section", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r mt-10 from-blue-50 via-indigo-100 to-blue-200 min-h-screen py-12 px-6 sm:px-8 lg:px-16"
    >
      <header className="text-center mb-16">
        <h1 ref={headingRef} className="text-5xl font-extrabold text-blue-700 mb-6">
          Who We Serve – Your Trusted Wholesale Partner
        </h1>
        <p ref={paragraphRef} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Nifa Overseas, we specialize in supplying handcrafted metal décor to businesses worldwide, catering to diverse industries and order sizes. Whether you're a small boutique, a growing brand, or a large-scale wholesaler, we have the right solutions for you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            icon: "🎯",
            title: "Small & Medium Business Buyers",
            points: [
              "✔ Low Minimum Order Quantities (MOQs) – Ideal for boutique stores, online retailers, and emerging brands.",
              "✔ Exclusive Handmade Designs – Stand out from mass-produced décor with artisanal, one-of-a-kind pieces.",
              "✔ Fast & Reliable Shipping – Hassle-free global shipping with secure packaging to ensure safe delivery.",
              "✔ Dropshipping & Wholesale Support – Perfect for online sellers and resellers looking to expand their product range.",
            ],
          },
          {
            icon: "🎯",
            title: "Wholesalers & Distributors",
            points: [
              "✔ Consistent Supply & Large-Scale Production – Meeting wholesale demand without compromising quality.",
              "✔ Custom Branding & Private Labeling – Personalize packaging, logos, and exclusive collections for your brand.",
              "✔ Competitive Wholesale Pricing – Get the best rates on bulk orders with profitable margins.",
              "✔ High-Demand Seasonal & Festive Products – Stock up on fast-selling décor items for peak seasons.",
            ],
          },
          {
            icon: "🎯",
            title: "Retailers & E-commerce Sellers",
            points: [
              "✔ Brick-and-Mortar Stores – Home décor shops, gift stores, and specialty retailers looking for artisanal collections.",
              "✔ Online Marketplaces – Perfect for Amazon, Etsy, eBay, Shopify, and other e-commerce platforms.",
              "✔ Curated Product Selections – Tailored recommendations based on trends and customer preferences.",
              "✔ Sustainable & Ethical Sourcing – Attract eco-conscious shoppers with fair-trade, handmade goods.",
            ],
          },
          {
            icon: "🎯",
            title: "Interior Designers & Home Décor Professionals",
            points: [
              "✔ Rustic, Vintage, and Bohemian Interiors – Create timeless aesthetics with handcrafted metal bells and décor.",
              "✔ Commercial & Residential Projects – Custom solutions for homes, hotels, restaurants, and retail spaces.",
              "✔ Exclusive, Custom Designs – Collaborate with us for tailor-made décor solutions for high-end clients.",
            ],
          },
          {
            icon: "🎯",
            title: "Event Planners & Seasonal Buyers",
            points: [
              "✔ Christmas & Holiday Decorators – High-demand jingle bells, rustic accents, and festive hanging ornaments.",
              "✔ Wedding & Event Planners – Unique décor pieces for vintage, boho, and farmhouse-themed weddings.",
              "✔ Corporate & Promotional Gifting – Custom-branded bells for business giveaways and event souvenirs.",
            ],
          },
          {
            icon: "🎯",
            title: "Hotels, Restaurants & Hospitality Industry",
            points: [
              "✔ Luxury Handmade Décor for Hotels & Resorts – Enhance your space with unique, artisanal pieces.",
              "✔ Vintage Bells for Cafés & Restaurants – Create a warm, rustic atmosphere with handmade charm.",
              "✔ Eco-Friendly & Sustainable Solutions – Appeal to guests who appreciate ethical and responsible décor.",
            ],
          },
          {
            icon: "🎯",
            title: "Importers & Global Trade Partners",
            points: [
              "✔ Bulk Supply with Consistent Quality – Ensure reliable stock for international markets.",
              "✔ Customization for Different Markets – Adjust designs, packaging, and materials to meet regional preferences.",
              "✔ End-to-End Export Support – Hassle-free shipping, documentation, and global trade compliance.",
            ],
          },
        ].map((item, index) => (
          <section key={index} className="serve-section bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              {item.icon} {item.title}
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Serve;

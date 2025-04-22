import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion"; // Import framer-motion

gsap.registerPlugin(ScrollTrigger);

const NewAbout = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/AboutImgs/1-min.webp",
    "/AboutImgs/crop.7_11zon.webp",
    "/AboutImgs/crop.13_11zon.webp",
    "/AboutImgs/crop.19_11zon.webp",
  ];

  // Function to cycle images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
    }, 5000); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
      .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .fromTo(imageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 }, "-=0.7")
      .fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1 },
        "-=0.5"
      );
  }, []);

  // ✅ JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nifa Overseas",
    "url": "https://nifaoverseas.com/",
    "logo": "https://res.cloudinary.com/dbnticsz8/image/upload/v1741778744/febTech/Nifa/jvxkmr90yb6zy5yfxjpw.png",
    "description": "Nifa Overseas is a leading manufacturer and exporter of handcrafted metal bells and home décor pieces, blending heritage and sustainability since 2020.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "Zip Code",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service"
    },
    "foundingDate": "2020",
  };

  return (
    <div ref={sectionRef} id="About Us" className="flex flex-col w-full px-4 pt-12">
      {/* Helmet for structured data */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative flex flex-col lg:flex-row items-center lg:items-start  w-full py-10 ">
        <div className="w-[45%] flex flex-col md:w-[40%] ">
          <div className="w-full flex justify-center">
            <img
              ref={logoRef}
              src="https://res.cloudinary.com/dbnticsz8/image/upload/v1741778744/febTech/Nifa/jvxkmr90yb6zy5yfxjpw.png"
              alt="Logo-new"
              className="w-[15vw]"
            />
          </div>
          <div>
            <h2 ref={headingRef} className="text-center font-bold text-lg lg:text-5xl">
              Leading Manufacturer & Exporter of Handmade Metal Bells & Home Décor
            </h2>
          </div>
        </div>

        {/* Wrap the image with a motion.div to control the sequence of entering/exiting */}
        <div className="  h-[10vh] w-[100vw] relative flex justify-center py-5 ">
        <motion.div
          key={currentImageIndex}
          className="absolute top-[10%] md:static"
          initial={{ opacity: 1, y: 0 }} // Start from normal position
          animate={{
            opacity: 0,
            y: -100, // Move upward and fade out
            transition: { duration: 1, delay: 5 }, // Delay for 5 seconds before fading out
          }}
          exit={{
            opacity: 0,
            y: -200, // Move upward and fade out
            transition: { duration: 1 },
          }}
        >
          <motion.img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="h-[30vw] "
            initial={{ opacity: 0, y: 100 }} // Start below the viewport
            animate={{
              opacity: 1,
              y: 0, // Move to normal position
              transition: { duration: 1 },
            }}
            exit={{
              opacity: 0,
              y: -100, // Move upward and fade out
              transition: { duration: 1 },
            }}
          />
        </motion.div>
        </div>
      </div>

      <div ref={textRef} className="px-4 space-y-4 text-sm font-normal md:text-2xl">
        <p>
          Welcome to Nifa Overseas, where we craft exquisite handmade metal
          bells and home décor pieces that blend heritage, sustainability, and
          craftsmanship. Based in India since 2020, we are a leading
          manufacturer and exporter of handcrafted metal décor, rustic bells,
          and festive ornaments, catering to B2B buyers worldwide.
        </p>
        <p>
          Our products are more than just décor; they represent centuries-old
          artisan traditions, passed down through generations. Each piece is
          carefully handcrafted using traditional techniques and simple tools,
          ensuring unmatched quality, character, and authenticity. We proudly
          serve small, medium, and bulk buyers, including wholesalers,
          retailers, importers, e-commerce sellers, and interior designers
          across the USA, Europe, and beyond. With the rising demand for
          Christmas décor, rustic home accents, and sustainable handmade
          products, our collections are highly sought-after by businesses
          looking for unique, eco-friendly solutions.
        </p>
      </div>
    </div>
  );
};

export default NewAbout;

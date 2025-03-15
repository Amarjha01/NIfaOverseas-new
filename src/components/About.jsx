import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const NewAbout = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Starts animation when 80% of the section is in view
        toggleActions: "play none none none", // Runs once when in view
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

  return (
    <div ref={sectionRef} id="About Us" className="flex flex-col w-full px-4 pt-12">
      <div className="relative flex w-full py-10">
        <div className="w-[45%] flex flex-col md:w-[40%]">
          <div className="w-full flex justify-center">
            <img
              ref={logoRef}
              src="https://res.cloudinary.com/dbnticsz8/image/upload/v1741778744/febTech/Nifa/jvxkmr90yb6zy5yfxjpw.png"
              alt="Logo-new"
              className="w-[15vw]"
            />
          </div>
          <div>
            <h2
              ref={headingRef}
              className="text-center font-bold text-lg lg:text-5xl"
            >
              Leading Manufacturer & Exporter of Handmade Metal Bells & Home
              Décor
            </h2>
          </div>
        </div>
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dbnticsz8/image/upload/v1741779858/febTech/Nifa/cn4u2vcvyez8unfwikde.webp"
          alt="Bunch of bells"
          className="h-[25vw] absolute right-2 top-16 md:static"
        />
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

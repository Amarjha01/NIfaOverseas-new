import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(imgRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    }).from(
      textRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.8"
    );
  }, []);

  return (
    <div ref={containerRef} className="p-4 md:p-8 w-full h-auto flex flex-col lg:flex-row">
      <img
        ref={imgRef}
        src="https://res.cloudinary.com/dbnticsz8/image/upload/v1741791710/febTech/Nifa/lsps8yxgjudsdiz8r7pm.png"
        alt=""
        className="lg:w-[40%]"
      />
      <div ref={textRef} className="w-full flex flex-col space-y-3 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Our Story – Preserving India’s Artisan Heritage</h2>
        <p className="text-xl font-light lg:font-medium">
          At Nifa Overseas, we take immense pride in supporting and empowering
          Indian artisans. Many of our craftsmen come from families with
          generations of metalworking experience, and by partnering with them,
          we help preserve this dying art form. With the rise of mass production
          and machine-made goods, handcrafted products are becoming rare. We are
          committed to ensuring that these skills continue to thrive, providing
          fair wages, ethical work conditions, and access to the global market
          for our artisans.
        </p>
        <h3 className="text-xl font-bold text-amber-700">
          By choosing Nifa Overseas, you are not just buying décor—you are
          investing in craftsmanship, tradition, and sustainability.
        </h3>
      </div>
    </div>
  );
};

export default Stories;

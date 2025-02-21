import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for elements
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef1.current,
        start: "top 80%", // Adjust trigger position
        end: "bottom 50%",
        scrub: 1, // Smooth effect
        markers: true, // Debugging (remove in production)
      },
    });

    tl.from(textRef1.current, {
      delay:0.5,
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        textRef2.current,
        {
          y: 50,
          opacity: 0,
          duration: 1.5,
        },
        "-=0.5" // Overlapping animations
      )
      .from(
        textRef3.current,
        {
          y: 50,
          opacity: 0,
          duration: 1.5,
        },
        "-=0.5"
      );
  }, [textRef1, textRef2, textRef3]); // Ensures GSAP runs on ref changes

  return (
    <div className="flex mx-auto w-full justify-center" id="about">
      <div className="w-8/10 flex justify-between items-center">
        <div className="md:w-2/4 w-full text-xl">
          <span ref={textRef1} className="font-bold text-4xl overflow-hidden">
            About Us
          </span>
          <p ref={textRef2} className="py-3.5 overflow-hidden">
            At NIFA OVERSEAS, we bring timeless craftsmanship to the world! Since 2020, we’ve been empowering small artisans to create 100% original, antique handicrafts that blend tradition with modern design. Every piece we offer is not just a product—it’s a story of skill, heritage, and sustainability.
          </p>
          <p className="overflow-hidden" ref={textRef3}>
            Committed to ethical practices, we ensure high-quality, handcrafted treasures that resonate globally. Whether you're a collector, retailer, or someone who loves unique art, we craft with passion, so you can own something truly special! 🌍✨
          </p>
        </div>
        <div className="hidden md:flex h-auto w-2/5">
          <img
            src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
            className="w-full"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

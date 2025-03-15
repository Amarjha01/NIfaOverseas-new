import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import img from '../assets/halfC1.png'
const Slider = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const container = imagesRef.current;

    // Prevent multiple duplicate images
    if (container.children.length === 5) {
      // Clone images ONCE for infinite scroll effect
      for (let i = 0; i < 5; i++) {
        const clone = container.children[i].cloneNode(true);
        container.appendChild(clone);
      }
    }

    // GSAP Infinite Scrolling Animation
    gsap.to(container, {
      xPercent: -50, // Moves half of the duplicated images
      duration: 5, // Adjust speed (Lower = Faster)
      ease: "none", // Smooth animation
      repeat: -1, // Infinite loop
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Ensures smooth infinite scrolling
      },
    });
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="px-3 z-20">
        <h2 className="text-4xl font-bold text-center">
          Small Business Owner, Wholesaler, Distributor, or Global trade buyer
        </h2>
        <h3 className="text-2xl text-center lg:font-bold">
          Every piece we offer is not just a product—it’s a story of skill, heritage, and sustainability.
        </h3>
      </div>

      <div className=" relative">
        <div className="  w-[200vw] h-auto absolute z-10 rotate-180 ">
        <img src={img} alt=""  className=" brightness-0  invert translate-x-[25%] translate-y-[75%] lg:w-full "/>
       </div>
        {/* Scrolling Images */}
       <div className=" w-full relative">
       
        <div className="flex w-full space-x-4 will-change-transform -z-0 " ref={imagesRef}>
          {[
            "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067844/Nifa%20Overseas/bwbwft1z6j8w9naxydnx.jpg",
            "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067811/Nifa%20Overseas/qkiscc8y9ioog86w9qev.jpg",
            "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067818/Nifa%20Overseas/oozdepuikmd5rfkldrst.jpg",
            "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067835/Nifa%20Overseas/hzbxfezloyk0e1gsjuv3.jpg",
            "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067777/Nifa%20Overseas/s9ufsgt69jzulu9qd5py.jpg",
          ].map((src, index) => (
            <img key={index} src={src} alt="" className="w-[20%] " />
          ))}
        </div>
       <div className=" w-[200vw]  h-auto absolute -bottom-0">
        <img src={img} alt=""  className=" lg:w-full brightness-0 invert  -translate-x-[25%] translate-y-[75%] "/>
       </div>
       </div>
      
      </div>
    </div>
  );
};

export default Slider;

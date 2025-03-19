import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Image data
const imagesDesktop = [
  
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067737/Nifa%20Overseas/dvbssrc2vdavzdrhgocn.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067777/Nifa%20Overseas/s9ufsgt69jzulu9qd5py.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067786/Nifa%20Overseas/hpylhg5hjtjxxqw3uzad.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067798/Nifa%20Overseas/erzso0dzxr0lrtgdkwqr.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067805/Nifa%20Overseas/uwy8jxye2thjfbdaesgl.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067811/Nifa%20Overseas/qkiscc8y9ioog86w9qev.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067818/Nifa%20Overseas/oozdepuikmd5rfkldrst.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067829/Nifa%20Overseas/efqv8xvg8g5r3bhxdid1.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067835/Nifa%20Overseas/hzbxfezloyk0e1gsjuv3.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067840/Nifa%20Overseas/hyundanpljdsgqnhoxt9.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067844/Nifa%20Overseas/bwbwft1z6j8w9naxydnx.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067851/Nifa%20Overseas/e4jql9wg7g5ecn1fwyhy.jpg', alt:''},
];

const imagesMobile = [
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741250752/Nifa%20Overseas/t3flkcyplyppurtcryyr.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067777/Nifa%20Overseas/s9ufsgt69jzulu9qd5py.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067786/Nifa%20Overseas/hpylhg5hjtjxxqw3uzad.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741250781/Nifa%20Overseas/xalz3klj7eruarnhjwn4.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067805/Nifa%20Overseas/uwy8jxye2thjfbdaesgl.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067811/Nifa%20Overseas/qkiscc8y9ioog86w9qev.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067818/Nifa%20Overseas/oozdepuikmd5rfkldrst.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067829/Nifa%20Overseas/efqv8xvg8g5r3bhxdid1.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067835/Nifa%20Overseas/hzbxfezloyk0e1gsjuv3.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067840/Nifa%20Overseas/hyundanpljdsgqnhoxt9.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067844/Nifa%20Overseas/bwbwft1z6j8w9naxydnx.jpg', alt:''},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067851/Nifa%20Overseas/e4jql9wg7g5ecn1fwyhy.jpg', alt:''},
];

const ImageGallery = () => {
  const desktopImageRefs = useRef([]);
  const mobileImageRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseEnter = (img) => {
      gsap.to(img, { scale: 1.02, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (img) => {
      gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    desktopImageRefs.current.forEach((img) => {
      if (img) {
        gsap.set(img, { scale: 1 });
        img.addEventListener("mouseenter", () => handleMouseEnter(img));
        img.addEventListener("mouseleave", () => handleMouseLeave(img));
      }
    });

    return () => {
      desktopImageRefs.current.forEach((img) => {
        if (img) {
          img.removeEventListener("mouseenter", handleMouseEnter);
          img.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, [desktopImageRefs.current]);

  return (
    <div className="w-full h-auto flex justify-center" id="Gallery">
      <div className="  w-8/10 grid grid-cols-4 md:grid-cols-6  gap-4 py-4 ">
        {imagesDesktop.map((img, index) => (
          <img
            key={index}
            ref={(el) => (desktopImageRefs.current[index] = el)}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="hidden lg:block w-full drop-shadow-lg object-cover rounded-lg shadow-lg aspect-square cursor-pointer"
          />
        ))}
        {imagesMobile.map((img, index) => (
          <img
            key={index}
            ref={(el) => (mobileImageRefs.current[index] = el)}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="lg:hidden block w-full drop-shadow-lg object-cover rounded-lg shadow-lg aspect-square cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

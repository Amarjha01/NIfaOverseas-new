import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Image data
const images = [
  "https://plus.unsplash.com/premium_photo-1679809447923-b3250fb2a0ce?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1679811675652-2302bf23c9f2?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1608793733118-ee3f16002251?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557687790-902ede7ab58c?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1679811671226-9181616d7570?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1679811674659-21be3cc25946?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1589051088132-06f36a22012a?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1620619767323-b95a89183081?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1619280605593-721b24d8914b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1589395595558-18e333cf6341?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1589051095874-5caef81e6243?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1638192808899-b5e65e1dca97?q=80&w=2075&auto=format&fit=crop",
];

const ImageGallery = () => {
  const imageRefs = useRef([]);

  useGSAP(() => {
    // Check if it's a mobile device (width < 768px)
    if (window.innerWidth < 768) return;

    imageRefs.current.forEach((img) => {
      gsap.set(img, { scale: 1 });

      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    return () => {
      imageRefs.current.forEach((img) => {
        img.removeEventListener("mouseenter", () => {});
        img.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="w-full h-auto flex justify-center" id="gallery">
      <div className="w-8/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 py-4 mt-15">
        {images.map((img, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="w-full h-40 object-cover rounded-lg shadow-lg aspect-[3/2] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

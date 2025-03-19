import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Image data
const imagesDesktop = [
  
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067737/Nifa%20Overseas/dvbssrc2vdavzdrhgocn.jpg', alt:'Two stylish metal Christmas trees, one silver and one gold, add a festive touch to a cozy holiday room. A fuzzy blanket and a twinkling tree in the background complete the warm, merry vibe'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067777/Nifa%20Overseas/s9ufsgt69jzulu9qd5py.jpg', alt:'A display of handcrafted Christmas and festive decorations, including gold angels, metal bells, wooden nativity scenes, and hanging ornaments. Rustic lanterns, holiday-themed cutouts, and vintage-inspired home decor create a warm and festive ambiance.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067786/Nifa%20Overseas/hpylhg5hjtjxxqw3uzad.jpg', alt:'A festive display featuring handcrafted bells, vintage telescopes, brass goblets, and decorative ornaments. A woven basket holds colorful hand-painted bells, while a small Christmas tree adorned with golden bells adds a holiday touch. A backdrop with artisans at work highlights traditional craftsmanship.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067798/Nifa%20Overseas/erzso0dzxr0lrtgdkwqr.jpg', alt:'A showcase design featuring two nativity-themed Christmas ornaments with gold bells, one embellished with dark blue crystals and the other with white pearls, hanging in wooden manger frames. A softly glowing Christmas tree adds a festive backdrop.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067805/Nifa%20Overseas/uwy8jxye2thjfbdaesgl.jpg', alt:'A hand holding an intricately designed silver and gold goblet, showcasing its detailed engravings. The background features an outdoor market stall with brass antiques, a telescope, and a cityscape with a Smoke House Deli sign.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067811/Nifa%20Overseas/qkiscc8y9ioog86w9qev.jpg', alt:'A display of handcrafted wooden items and metal decor at an outdoor market stall, featuring an expandable wooden rack, engraved goblets, brass ornaments, and vintage-style collectibles.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067818/Nifa%20Overseas/oozdepuikmd5rfkldrst.jpg', alt:'A hand holds an ornate gold goblet with intricate engravings, set against the backdrop of a modern shopping area with the Smoke House Deli sign visible. The detailed craftsmanship of the goblet stands out, reflecting light, while decorative items and greenery are seen in the background'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067829/Nifa%20Overseas/efqv8xvg8g5r3bhxdid1.jpg', alt:'Ornate metal bells with intricate floral engravings hang from a rope on a metal stand, displayed at an outdoor market. A telescope and woven baskets are visible in the background, with a café storefront adding depth to the scene.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067835/Nifa%20Overseas/hzbxfezloyk0e1gsjuv3.jpg', alt:'Festive display featuring golden metal bells, a large gold angel figurine with red and white ribbons, and a wooden nativity ornament with a jeweled globe. The background showcases hanging metal decorations, including hearts, stars, and fish, creating a warm holiday ambiance.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067840/Nifa%20Overseas/hyundanpljdsgqnhoxt9.jpg', alt:'A display of antique-style brass bells with intricate engravings, suspended by thick ropes on metal stands. A red decorative ball with white floral patterns hangs below. To the left, a brass and wooden tripod telescope stands next to woven baskets. The background features green plants and the glass exterior of a store named "Smoke House Deli.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067844/Nifa%20Overseas/bwbwft1z6j8w9naxydnx.jpg', alt:'Three vintage-style golden bells with Merry Christmas engraved on them, placed on a woven mat. The bells are adorned with a red and white ribbon and artificial green leaves. In the background, shelves display colorful bells in red, blue, green, and metallic tones.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067851/Nifa%20Overseas/e4jql9wg7g5ecn1fwyhy.jpg', alt:'A market display of wooden and brass handicrafts, including a carved wooden bowl with curved handles, an intricately detailed goblet, a wooden owl figurine, and a spinning wheel-like structure. The background features a Starbucks café with green umbrellas, and lush green plants frame the setting.'},
];

const imagesMobile = [
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741250752/Nifa%20Overseas/t3flkcyplyppurtcryyr.jpg', alt:'Metallic Christmas tree with layered, petal-like ornaments, red ribbons, and small bells. Nearby, an antique-style bell hangs, with brass ornaments decorating the background wall.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067777/Nifa%20Overseas/s9ufsgt69jzulu9qd5py.jpg', alt:'A display of handcrafted Christmas and festive decorations, including gold angels, metal bells, wooden nativity scenes, and hanging ornaments. Rustic lanterns, holiday-themed cutouts, and vintage-inspired home decor create a warm and festive ambiance.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067786/Nifa%20Overseas/hpylhg5hjtjxxqw3uzad.jpg', alt:'A festive display featuring handcrafted bells, vintage telescopes, brass goblets, and decorative ornaments. A woven basket holds colorful hand-painted bells, while a small Christmas tree adorned with golden bells adds a holiday touch. A backdrop with artisans at work highlights traditional craftsmanship.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741250781/Nifa%20Overseas/xalz3klj7eruarnhjwn4.jpg', alt:'A decorative hanging bell with a beaded, jewel-encrusted dome in blue, adorned with floral patterns and rhinestones. It is suspended from a wooden arch frame with a star at the top and a red ribbon tied around it. The display is on a wooden shelf with gold-toned Christmas ornaments and bells in the background.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067805/Nifa%20Overseas/uwy8jxye2thjfbdaesgl.jpg', alt:'A hand holding an intricately designed silver and gold goblet, showcasing its detailed engravings. The background features an outdoor market stall with brass antiques, a telescope, and a cityscape with a Smoke House Deli sign.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067811/Nifa%20Overseas/qkiscc8y9ioog86w9qev.jpg', alt:'A display of handcrafted wooden items and metal decor at an outdoor market stall, featuring an expandable wooden rack, engraved goblets, brass ornaments, and vintage-style collectibles.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067818/Nifa%20Overseas/oozdepuikmd5rfkldrst.jpg', alt:'A hand holds an ornate gold goblet with intricate engravings, set against the backdrop of a modern shopping area with the "Smoke House Deli" sign visible. The detailed craftsmanship of the goblet stands out, reflecting light, while decorative items and greenery are seen in the background'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067829/Nifa%20Overseas/efqv8xvg8g5r3bhxdid1.jpg', alt:'Ornate metal bells with intricate floral engravings hang from a rope on a metal stand, displayed at an outdoor market. A telescope and woven baskets are visible in the background, with a café storefront adding depth to the scene.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067835/Nifa%20Overseas/hzbxfezloyk0e1gsjuv3.jpg', alt:'Ornate metal bells with intricate floral engravings hang from a rope on a metal stand, displayed at an outdoor market. A telescope and woven baskets are visible in the background, with a café storefront adding depth to the scene.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067840/Nifa%20Overseas/hyundanpljdsgqnhoxt9.jpg', alt:'A display of antique-style brass bells with intricate engravings, suspended by thick ropes on metal stands. A red decorative ball with white floral patterns hangs below. To the left, a brass and wooden tripod telescope stands next to woven baskets. The background features green plants and the glass exterior of a store named "Smoke House Deli.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067844/Nifa%20Overseas/bwbwft1z6j8w9naxydnx.jpg', alt:'Three vintage-style golden bells with Merry Christmas engraved on them, placed on a woven mat. The bells are adorned with a red and white ribbon and artificial green leaves. In the background, shelves display colorful bells in red, blue, green, and metallic tones.'},
  {img:'https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067851/Nifa%20Overseas/e4jql9wg7g5ecn1fwyhy.jpg', alt:'A market display of wooden and brass handicrafts, including a carved wooden bowl with curved handles, an intricately detailed goblet, a wooden owl figurine, and a spinning wheel-like structure. The background features a Starbucks café with green umbrellas, and lush green plants frame the setting.'},
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

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const categories = [
//   {
//     title: "Handmade Metal Bells",
//     description:
//       "Timeless designs perfect for holiday décor, home interiors, and spiritual settings.",
//     emoji: "🔔",
//     bgGradient: "from-teal-500 to-teal-700",
//   },
//   {
//     title: "Rustic Hanging Bells",
//     description:
//       "Festive and traditional, ideal for Christmas and seasonal decorations.",
//     emoji: "🎄",
//     bgGradient: "from-orange-400 to-orange-600",
//   },
//   {
//     title: "Vintage & Shabby Chic Bells",
//     description:
//       "Aged and distressed finishes for a charming countryside appeal.",
//     emoji: "🏡",
//     bgGradient: "from-gray-600 to-gray-800",
//   },
//   {
//     title: "Hanging Cluster Bells",
//     description: "Artistic décor for indoor and outdoor ambiance.",
//     emoji: "🌿",
//     bgGradient: "from-teal-700 to-teal-800",
//   },
//   {
//     title: "Custom Metal Home Décor",
//     description:
//       "Private label and branding options for retailers and wholesalers.",
//     emoji: "🏷️",
//     bgGradient: "from-teal-800 to-teal-900",
//   },
//   {
//     title: "Festive & Event Décor Bells",
//     description:
//       "Perfect for Christmas, weddings, and large-scale seasonal décor projects.",
//     emoji: "🎉",
//     bgGradient: "from-amber-400 to-amber-600",
//   },
// ];

// const Category = () => {
//   const categoryRefs = useRef([]);

//   useEffect(() => {
//     categoryRefs.current.forEach((el, index) => {
//       // Initial blinking effect
//       gsap.fromTo(
//         el,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 0.2,
//           repeat: 3, // Blinks 3 times
//           yoyo: true, // Goes back and forth
//           ease: "power1.inOut",
//           onComplete: () => {
//             // Final animation after blinking
//             gsap.fromTo(
//               el,
//               {
//                 opacity: 0,
//                 x: window.innerWidth < 640 ? -100 : 100, // Slide in from left on mobile
//                 y: window.innerWidth >= 640 ? 100 : 0, // Slide up on desktop
//               },
//               {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//                 duration: 0.1,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                   trigger: el,
//                   start: "top 80%",
//                   toggleActions: "play none none reverse",
//                 },
//               }
//             );
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="py-16 px-6 sm:px-10 lg:px-16">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-700 mb-6">
//           Our Handmade Product Categories
//         </h2>
//         <p className="text-xl text-gray-600 mx-auto max-w-3xl">
//           Discover our diverse range of handcrafted metal décor, perfect for
//           adding a unique touch to any space.
//         </p>
//       </div>

//       {/* Grid Layout for Categories */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             ref={(el) => (categoryRefs.current[index] = el)}
//             className={`relative bg-gradient-to-r ${category.bgGradient} text-white py-24 px-8 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:brightness-110`}
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center bg-opacity-30"
//               style={{
//                 backgroundImage: "url('https://via.placeholder.com/1600x800')",
//               }}
//             ></div>
//             <div className="relative z-10 text-center">
//               <h3 className="text-4xl font-bold mb-4">{category.title}</h3>
//               <p className="text-lg mb-6">{category.description}</p>
//               <div className="flex justify-center">
//                 <span className="text-6xl">{category.emoji}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Category = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    categoryRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const categories = [
    {
      heading: "Handmade Metal Bells",
      content: "Timeless designs perfect for holiday décor, home interiors, and spiritual settings.",
    },
    {
      heading: "Hanging Cluster Bells & Wind Chimes",
      content: "Artistic décor for indoor and outdoor ambiance.",
    },
    {
      heading: "Custom Metal Home Décor",
      content: "Private label and branding options for retailers and wholesalers.",
    },
    {
      heading: "Festive & Event Décor Bells",
      content: "Perfect for Christmas, weddings, and large-scale seasonal décor projects.",
    },
    {
      heading: "Rustic Hanging Bells & Jingle Bells",
      content: "Festive and traditional, ideal for Christmas and seasonal decorations.",
    },
    {
      heading: "Vintage & Shabby Chic Bells",
      content: "Aged and distressed finishes for a charming countryside appeal.",
    },
  ];

  return (
    <div className="w-full p-10">
      <h3 className="font-bold text-4xl uppercase text-center mb-8">
        Our Categories
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((data, index) => (
          <div
            key={index}
            ref={(el) => (categoryRefs.current[index] = el)}
            className="max-w-[180.77px] bg-amber-600 text-white p-3 rounded-2xl space-y-2 shadow-custome transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-bold text-center">{data.heading}</h3>
            <p className="text-sm text-center">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

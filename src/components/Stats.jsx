// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// const statsData = [
//   { label: " 1000+ Products" },
//   { label: "Ready To Ship Products" },
//   { label: "100% Handmade & Eco-Friendly" },
//   { label: "Small, Medium & Bulk Buying" },
// ];

// const Statistics = () => {
//   const numberRefs = useRef([]);

//   useEffect(() => {
//     numberRefs.current.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         { innerText: 0 }, // Start from 0
//         {
//           innerText: statsData[index].number, // Animate to the target number
//           duration: 2,
//           ease: "power1.out",
//           snap: { innerText: 1 }, // Ensures whole numbers (no decimals)
//           onUpdate: function () {
//             el.innerText = Math.floor(el.innerText); // Round to nearest whole number
//           },
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%", // Starts animation when the element enters the viewport
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="h-auto  w-full  flex flex-col items-center  justify-center  py-2 z-10" id="Statistics">
//       <ul className=" w-auto grid grid-cols-1 md:grid-cols-4 text-center gap-5 mx-1.5 ">
//         {statsData.map((stat, index) => (
//           <li key={index} className= "max-w-[200px] lg:max-w-[360px] bg-white  text-black py-5 shadow-c flex justify-center items-center font-bold text-2xl">
//             <p className="">{stat.label}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Statistics;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const statsData = [
//   { number: 1000, label: "Products" },
//   { number: 5000, label: "UAE" },
//   { number: 200, label: "India" },
//   { number: 50, label: "Countries" },
// ];
const statsData = [
  { label: " 1000+ Products" },
  { label: "Ready To Ship Products" },
  { label: "100% Handmade & Eco-Friendly" },
  { label: "Small, Medium & Bulk Buying" },
];

const Statistics = () => {
  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0 }, // Start from 0
        {
          innerText: statsData[index].number, // Animate to the target number
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 }, // Ensures whole numbers (no decimals)
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText); // Round to nearest whole number
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Starts animation when the element enters the viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-auto  w-full    py-2 z-10" id="Statistics">
      <ul className=" w-auto grid grid-cols-4 md:grid-cols-4 text-center gap-5 mx-1.5 ">
        {statsData.map((stat, index) => (
          <li key={index} className= "max-w-[200px] lg:max-w-[360px] bg-white  text-black py-5 shadow-c flex justify-center items-center font-bold lg:text-2xl text-sm">
            <p className="">{stat.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;


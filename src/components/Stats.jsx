import { useEffect, useRef } from "react";
import gsap from "gsap";

const statsData = [
  { number: 3000, label: "USA" },
  { number: 5000, label: "UAE" },
  { number: 200, label: "India" },
  { number: 50, label: "Countries" },
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
          duration: 2, // Animation duration in seconds
          ease: "power1.out",
          snap: { innerText: 1 }, // Ensures whole numbers (no decimals)
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText); // Round to nearest whole number
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-auto w-full py-2" id="Statistics">
      <ul className="grid grid-cols-4 text-center gap-3 mx-1.5">
        {statsData.map((stat, index) => (
          <li key={index} className="bg-amber-600 py-5">
            <p ref={(el) => (numberRefs.current[index] = el)} className="text-xl font-bold">
              0
            </p>
            <p className="text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

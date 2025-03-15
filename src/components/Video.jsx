import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  // const video = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     video.current,
  //     { y:'30vh', opacity: 0, scale: 0.8, width: 0, height: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       scale: 1,
  //       duration: 3,
  //       width: "100%",
  //       height: "100%",
  //       ease: "powe1.in",
  //       scrollTrigger: {
  //         trigger: video.current,
  //         start: "top 110%",
  //         toggleActions: "play none none none",
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="  w-full flex justify-center items-center overflow-hidden opacity-100 scale-100">
      <video  className="w-full" autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dkdyrgg3q/video/upload/v1741069458/Nifa%20Overseas/eylnzb8k1cnmjfbjxdcd.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;

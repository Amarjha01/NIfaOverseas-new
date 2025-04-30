import gsap from "gsap";
import { useRef, useEffect } from "react";

import herovideo from '../assets/HeroImgs/NifaFinal.mp4'
const Video = () => {

  return (
    <div className="  w-full flex justify-center items-center overflow-hidden opacity-100 scale-100">
      <video  className="w-full" autoPlay muted loop playsInline>
        <source
          src={herovideo}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;

import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Banner = ({ onClose }) => {


  return (
    <div className="fixed inset-0 w-full h-screen z-50 hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-65 md:opacity-80 flex justify-center items-center"></div>

      {/* Banner Content */}
      <div className="h-full w-full flex justify-center items-center relative ">
        <img
          src="https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741250657/Nifa%20Overseas/vp1ayvtrnrxqiqtgfqbm.jpg"
          alt="Banner"
          className=" h-[60%] md:h-[80%] lg:h-[90%]  opacity-100"
        />
        <span
          onClick={onClose}
          className="absolute z-50 md:right-40 md:top-10 right-9 top-7 text-3xl cursor-pointer text-white font-bold"
        >
          <IoCloseSharp />
        </span>
      </div>
    </div>
  );
};

export default Banner;

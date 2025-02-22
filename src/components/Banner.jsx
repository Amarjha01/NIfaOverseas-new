import { useEffect } from "react";

const Banner = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
   <div className=" absolute w-full z-20 h-[100vh]">
     <div className="absolute h-[100vh] w-full opacity-65 md:opacity-95 bg-black  flex justify-center items-center">   
     </div>
     <div className="h-[100%] w-full  flex justify-center items-center relative"> 
        <img
          src="https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740198301/twaacdwd1gmbo9yyf3ts.jpg"
          alt=""
          className="md:h-[80%] w-[90%] md:w-auto opacity-100"
        />
        <span 
          onClick={onClose} 
          className="absolute z-40 md:right-40 md:top-10 right-9 top-7 text-3xl cursor-pointer text-white"
        >
          X
        </span>
      </div>
   </div>
  );
};

export default Banner;

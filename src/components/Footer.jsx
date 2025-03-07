import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";

// Social media icons
import {FaPinterestP} from "react-icons/fa6"
// fair info icon
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import { useRef } from "react";
 





const Footer = () => {
  const footer = useRef();
  const hLine1 = useRef();
  const hLine2 = useRef();
  useGSAP(() => {
    gsap.from(hLine1.current, {
      width: 0,
      duration: 3,
      scrollTrigger: {
        trigger: hLine1.current,
        start: "top 90%",
        // end: "top 30%",
        // markers: true, // Should show scroll markers
        // scrub: true,
      },
    });
    gsap.from(hLine2.current, {
      width: 0,
      duration: 3,
      scrollTrigger: {
        trigger: hLine2.current,
        start: "top 90%",
        // end: "top 30%",
        // markers: true, // Should show scroll markers
        // scrub: true,
      },
    });
  }, []);
  
  
  return (
    <div ref={footer} className=" md:h-fit lg:h-fit h-full w-full   md:relative md:bottom-0  lg:relative lg:bottom-0  pt-5  text-white  ">
      {/* first footer part */}
      <div className=" bg-gray-700  w-[100vw] flex justify-center">
        <div className="max-w-[1600px] flex md:justify-evenly  lg:flex-row md:flex-row flex-col  w-full items-center  md:mx-5 ">
          {/* first footer part1 */}

          <div className=" flex items-center flex-col w-[70%] md:w-[50%] space-y-3 py-9    ">
            <img src='https://res.cloudinary.com/dbnticsz8/image/upload/v1741171699/febTech/Nifa/kxielif9zwsladfkejms.jpg' alt="" className="h-auto w-72"/>
           
          </div>

          <div className=" flex items-center flex-col w-[70%] md:w-[50%] space-y-3 py-9  ">
            <div className=" flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
                alt=""
                className="h-16 w-20"
              />
              <div className=" ">
                <span className="font-bold">NifaOverseas</span>
                <p>Nifa Overseas Pvt. Ltd.</p>
              </div>
            </div>
            <div className=" md:w-[80%] w-full text-md">
            Bringing heritage to life with authentic handcrafted treasures! We specialize in antique handicrafts, crafted by skilled artisans with 100% originality and sustainable practices. Explore our globally loved collection and add a touch of tradition to your space
            </div>
          </div>

          {/* first footer part 2 */}
          <div className="flex flex-col space-y-2 w-64 items-start py-9  ">
            <div className="px-5">
              <span className=" text-white font-bold">Get In Touch</span>
              <div ref={hLine1} className="h-1 w-20 bg-white"></div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <FaLocationDot />
                </span>
                <div className="flex flex-col">
                  <span className=" font-bold">Address:</span>
                  <p>
                    Khasra no. 402, Rampur Road, Roorkee Uttarakhand - 247667.
                    India
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <BiSolidPhoneCall />
                </span>
                <div className=" flex flex-col">
                  <span className=" font-bold ">Call Us:</span>
                  <a href="tel:91+9199569397" className="hover:text-blue-400">+91 8266043623</a>
                  <a href="tel:91+9199569397" className="hover:text-blue-400">+91 8057109969</a>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <MdEmail />
                </span>
                <div className=" flex flex-col">
                  <span className=" font-bold">Email:</span>
                  <a className=" hover:text-blue-400" href="mailto:nifaoverseas@gmail.com ">
                    nifaoverseas@gmail.com{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex items-center ">
              <div className=" flex p-1 ">
                <span className=" px-3 cursor-pointer">
                  <FaPinterestP />
                </span>
              </div>
              <p className=" ">Follow US On Pinterest</p>
            </div>
          </div>

       
        </div>
      </div>

      {/* second footer part */}
      <div className="bg-gray-900 h-fit w-full ">
        {/* <div className=" w-full flex justify-center gap-3 py-2 text-sm">
          <a href="#">Sitemap</a>
          <a href="#">Disclaimer</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
        </div> */}
        <div className="w-full py-2 ">
          <p className=" text-center flex justify-center items-center">
            Made With <span className="mx-1"><LuHeart /></span> <a href="https://febtech.in/" className="" target="_blank">FebTech IT Solutions Pvt. Ltd.</a>
            <FaExternalLinkAlt  className=" pl-0.5"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

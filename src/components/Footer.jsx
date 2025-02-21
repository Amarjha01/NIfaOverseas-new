import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
// Social media icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// fair info icon
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

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
      <div className=" bg-[#927bbd] w-[100vw] flex justify-center">
        <div className="max-w-[1600px] flex md:justify-around  lg:flex-row md:flex-row flex-col  w-full items-center ">
          {/* first footer part1 */}

          <div className=" flex flex-col space-y-3 py-9 ">
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
            <div className="max-w-xs w-64 text-xl">
            Bringing heritage to life with authentic handcrafted treasures! We specialize in antique handicrafts, crafted by skilled artisans with 100% originality and sustainable practices. Explore our globally loved collection and add a touch of tradition to your space
            </div>
          </div>

          {/* first footer part 2 */}
          <div className="flex flex-col space-y-5 w-64 items-start py-9">
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
                    Khasra no. 402, Rampur Road, Roorkee Uttarakhand - 110070.
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
                  <span className=" font-bold">Timings:</span>
                  <a href="tel:91+9199569397">+91 9199569397</a>
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
                  <a href="mailto:nifaoverseas@gmail.com ">
                    nifaoverseas@gmail.com{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3 cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className=" p-3 cursor-pointer">
                  <FaInstagram />
                </span>
                <span className=" p-3 cursor-pointer">
                  <FaLinkedin />
                </span>
                <span className=" p-3 cursor-pointer">
                  <BsTwitterX />
                </span>
                <span className=" p-3 cursor-pointer">
                  <FaYoutube />
                </span>
              </div>
              <p className=" pl-5">Follow US On epchindia</p>
            </div>
          </div>

          {/* first footer part 3 */}
          <div className="flex flex-col space-y-5 w-64 items-start py-9">
            <div className="px-5">
              <span className=" text-white font-bold">Fair Info</span>
              <div ref={hLine2} className="h-1 w-14 bg-white"></div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <FaCalendarAlt />
                </span>
                <div className="flex flex-col">
                  <span className=" font-bold">Dates:</span>
                  <p>14th - 18th October, 2025</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <FaRegClock />
                </span>
                <div className=" flex flex-col">
                  <span className=" font-bold">Timings:</span>
                  <p>09.00 AM – 06.00 PM (IST)</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <FaLocationDot />
                </span>
                <div className=" flex flex-col">
                  <span className=" font-bold">Venue:</span>
                  <p>India Expo Center & Mart, Greater Noida, Delhi-NCR</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex p-1">
                <span className=" p-3">
                  <FaUser />
                </span>
                <div className=" flex flex-col">
                  <span className=" font-bold">Admission:</span>
                  <p>
                    Only trade visitors aged 18+ with registration/Invitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second footer part */}
      <div className="bg-[#832f91] h-fit w-full ">
        <div className=" w-full flex justify-center gap-5 py-2">
          <a href="#">Sitemap</a>
          <a href="#">Disclaimer</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
        </div>
        <div className="w-full py-2">
          <p className=" text-center">
            © Copyright 2024. Export Promotion Council for Handicrafts. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

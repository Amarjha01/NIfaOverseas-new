import { useState, useEffect, useRef } from "react";
import "./components.css";
import iso from '../assets/iso9001.png'
import "./components.css";
import { Link } from "react-router-dom";

const MENU_ITEMS = ["Home", "Statistics", "About Us", "Gallery", "Contact Us", "Catalogue", "Blog"];
const MOBILE_MENU_ITEMS = ["Home", "About Us", "Gallery", "Contact Us", "Catalogue", "Blog"];

const Header = () => {
  const headerRef1 = useRef();
  const headerRef2 = useRef();
  const mobileMenuRef = useRef(); // Reference for mobile menu
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen); // Toggle the menu on click
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      } 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (item) => {
    setActiveComponent(item);
    setIsToggleOpen(false); // Close the menu when an item is clicked

    // Only scroll to section if not Blog
    if (item !== "Blog") {
      handleScrollToSection(item);
    }
  };

  const handleScrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 60; // Adjust this value as needed
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="Home"
      className="w-full left-0 z-30 bg-white shadow-md scroll-smooth"
    >
      <div>
        {/* part 1 for both mobile and desktop */}
        <div
          ref={headerRef1}
          className={`  px-6 md:px-16 flex items-center bg-amber-95  md:h-20  transition-transform duration-300 gap-3 ${
            isScrolled ? "-translate-3.5 md:-translate-y-4" : "translate-y-0"
          }`}
        >
          <div className=" w-full relative flex flex-col items-center  md:flex-row md:w-[40%] gap-4   ">
            <div className="  ">
              <img
                src="https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067893/Nifa%20Overseas/ggwlzpvdrfmjeozs28w9.png"
                alt="Logo"
                className="h-32 md:h-40 cursor-pointer bg-amber-30"
              />
           </div>
            <div className=" absolute top-[80%] md:left-10 md:static  flex gap-3 items-center  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5walsWNAAqh12c69MrsDJMmiWhLDsow6gw&s"
                alt="MCA-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src="https://ihgfdelhifair.in/assets/img/epch-logo-2024.png"
                alt="EPCH-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src={iso}
                alt="ECC-ISO"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='https://www.bharat-tex.com/wp-content/uploads/2025/01/Bharat-tex-logo.png'
                alt="Bharat-tex"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='https://uploads.ifdesign.de/WdgEvent/946/images/medium/IHGF-fair.jpg'
                alt="IHGF"
                className="h-5 lg:h-8 cursor-pointer"
              />
            </div>
          </div>

          <div className=" flex space-x-3 text-lg grow justify-end items-center   ">
            <div className="w-64 h-10 hidden md:flex justify-center items-center text-gray-700 font-semibold rounded-full transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-105 focus:outline-none">
              <button
                className="relative overflow-hidden px-6 py-2 text-lg md:text-sm uppercase rounded-full transition-all duration-300 ease-in-out bg-yellow-300 text-black"
                aria-label="enquire Now"
              >
                <a href="#Catalogue" className="relative z-10">Request Catalogue</a>
              </button>
            </div>

            <div className="w-40 h-10 hidden md:flex justify-center items-center text-gray-700 font-semibold rounded-full transition-transform duration-300 ease-in-out transform cursor-pointer border border-orange-400 hover:scale-105 focus:outline-none">
              <button
                className="relative overflow-hidden px-6 py-2 text-lg md:text-sm uppercase rounded-full transition-all duration-300 ease-in-out bg-white text-gray-700 hover:bg-orange-400 hover:text-white active:bg-orange-500 focus:ring-4 focus:ring-orange-300 animate-pulseBg"
                aria-label="enquire Now"
              >
                <a href="#Contact Us" className="relative z-10">enquire Now</a>
              </button>
            </div>
          </div>
        </div>

        {/* part 2 desktop navbar */}
        <nav
          ref={headerRef2}
          className={`hidden  md:flex justify-center w-full backdrop-blur-xl ${
            isScrolled ? "fixed top-0" : "flex"
          } ${isScrolled ? "bg-transparent" : "bg-gray-900"} ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <ul className="flex space-x-2 text-lg font-medium ">
            {MENU_ITEMS.map((item) => (
              <li
                key={item}
                tabIndex="0"
                className={`px-4 py-3 transition outline-none focus-visible:ring-2 focus-visible:ring-orange-800 ${
                  activeComponent === item
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-orange-400 hover:text-black"
                } cursor-pointer`}
                onClick={() => handleMenuClick(item)}
              >
                {item === "Blog" ? (
                  <Link to="/blog" className="block">{item}</Link>
                ) : (
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(item);
                    }}
                    className="block"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* part 2 Mobile navbar */}
        <nav
          ref={headerRef2}
          className={`md:hidden flex justify-center w-full backdrop-blur-xl ${
            isScrolled ? "fixed top-0" : "flex"
          } ${isScrolled ? "bg-transparent" : "bg-gray-900"} ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <ul className="flex space-x-2 text-sm font-medium ">
            {MOBILE_MENU_ITEMS.map((item) => (
              <li
                key={item}
                tabIndex="0"
                className={`px-1 py-3 transition outline-none focus-visible:ring-2 focus-visible:ring-orange-800 ${
                  activeComponent === item
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-orange-400 hover:text-black"
                } cursor-pointer`}
                onClick={() => handleMenuClick(item)}
              >
                {item === "Blog" ? (
                  <Link to="/blog" className="block">{item}</Link>
                ) : (
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(item);
                    }}
                    className="block"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "./components.css";

const MENU_ITEMS = ["Home", "Statistics", "About Us", "Gallery", "Contact Us"];

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
    handleScrollToSection(item);
  };

  const handleScroll = (id) => {
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

  // Handle click outside of the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsToggleOpen(false); // Close the mobile menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      id="Home"
      className="w-full left-0 z-10 bg-white shadow-md scroll-smooth"
    >
      <div>
        {/* part 1 for both mobile and desktop */}
        <div
          ref={headerRef1}
          className={`bgimg px-6 md:px-20 flex items-center justify-between h-20 transition-transform duration-300 ${
            isScrolled ? "-translate-y-4" : "translate-y-0"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
            alt="Logo"
            className="h-16 md:h-36 cursor-pointer"
          />
          <div className="md:flex space-x-3 text-lg">
            {[FaPinterestP].map((Icon, index) => (
              <a key={index} href="#" className="hover:scale-125 transition">
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* part 2 for mobile view */}
        <div
          className={`md:hidden h-16 w-full flex items-center justify-between px-2 ${
            isScrolled ? "fixed top-0" : " "
          } ${isScrolled ? "backdrop-blur-2xl" : "bg-gray-900"}`}
        >
          {isScrolled && (
            <img
              src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
              alt="Logo"
              className="w-32"
            />
          )}
          <button
            className={`md:hidden text-2xl focus:outline-none cursor-pointer pr-4 z-20 ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={handleToggleOpen} // Toggle button to open/close the menu
          >
            {isToggleOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* part 2 for desktop view */}
        <nav
          ref={headerRef2}
          className={`hidden md:flex justify-center w-full backdrop-blur-xl ${
            isScrolled ? "fixed top-0" : "flex"
          } ${isScrolled ? "bg-transparent" : "bg-gray-900"} ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <ul className="flex space-x-2 text-lg font-medium">
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
                <a
                  href={`#${item} `}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isToggleOpen && (
          <motion.nav
            ref={mobileMenuRef} // Attach the ref to the mobile menu
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full bg-gray-400 text-gray-900 flex flex-col items-center md:hidden py-4 ${
              isScrolled ? "-translate-y-4" : "translate-y-0"
            }`}
          >
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="py-3 px-6 w-full text-center cursor-pointer hover:bg-yellow-300 hover:text-black"
                onClick={() => handleMenuClick(item)}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="block"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

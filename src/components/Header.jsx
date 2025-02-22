import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "./components.css";

const MENU_ITEMS = ["Home", "Stats", "About", "Gallery", "Contact"];

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleOpen = () => setIsToggleOpen(!isToggleOpen);

  const handleMenuClick = (item) => {
    setActiveComponent(item);
    setIsToggleOpen(false);
    handleScrollToSection(item.toLowerCase());
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 250; // Adjust this value (100 or 200) as needed
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="home" className="w-full left-0 z-50 bg-white shadow-md scroll-smooth">
      {/* Logo & Social Links - Hidden on Scroll */}
     <div>
     <div className={`bgimg px-6 md:px-20 flex items-center justify-between h-20 transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <img
          src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
          alt="Logo"
          className="h-16 md:h-24 cursor-pointer"
        />
        <div className="hidden md:flex space-x-3 text-lg">
          {[FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaLinkedinIn, FaPinterestP].map((Icon, index) => (
            <a key={index} href="#" className="hover:scale-125 transition">
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
        <button className="md:hidden text-2xl focus:outline-none pr-3" onClick={handleToggleOpen}>
          {isToggleOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav id="desktop" className="hidden md:flex justify-center bg-blue-500 text-white w-full">
        <ul className="flex space-x-2 text-lg font-medium">
          {MENU_ITEMS.map((item) => (
            <li
              key={item}
              tabIndex="0" // Makes the menu items focusable
              className={`px-4 py-3  transition outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                activeComponent === item ? "bg-yellow-500 text-black" : "hover:bg-yellow-300 hover:text-black"
              } cursor-pointer`}
              onClick={() => handleScroll(item.toLowerCase())}
              onKeyDown={(e) => e.key === "Enter" && handleScroll(item.toLowerCase())} // Keyboard support
            >
              <a href={`#${item.toLowerCase()}`} className="block">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
     </div>

      {/* Fixed Desktop Navigation on Scroll */}
      <nav
        id="desktop"
        className={`hidden md:flex justify-center bg-blue-500 text-white w-full fixed top-0 left-0 transition-transform duration-300 ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex space-x-2 text-lg font-medium">
          {MENU_ITEMS.map((item) => (
            <li
              key={item}
              className={`px-4 py-3  transition cursor-pointer ${
                activeComponent === item ? "bg-yellow-500 text-black" : "hover:bg-yellow-300 hover:text-black"
              }`}
              onClick={() => handleScrollToSection(item.toLowerCase())}
            >
              <a href={`#${item.toLowerCase()}`} className="block">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isToggleOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-blue-500 text-white flex flex-col items-center md:hidden py-4"
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
                {item}
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

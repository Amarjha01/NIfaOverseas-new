import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Toggle Icons
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Animation
import "./components.css";

const MENU_ITEMS = ["Home", "Stats", "About", "Gallery", "Contact"];

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleToggleOpen = () => setIsToggleOpen(!isToggleOpen);

  const handleMenuClick = (item) => {
    setActiveComponent(item);
    setIsToggleOpen(false); // Close the menu after clicking
    handleScroll(item.toLowerCase()); // Scroll to section
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  

  const SOCIAL_LINKS = [
    { Icon: FaInstagram, link: "https://www.instagram.com" },
    { Icon: FaFacebookF, link: "https://www.facebook.com" },
    { Icon: FaYoutube, link: "https://www.youtube.com" },
    { Icon: FaXTwitter, link: "https://twitter.com" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com" },
    { Icon: FaPinterestP, link: "https://www.pinterest.com" }
  ];

  return (
    <header className="w-full left-0 z-50 bg-white shadow-md scroll-smooth">
      {/* Logo & Social Links */}
      <div className="px-6 md:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
          alt="Logo"
          className="h-16 md:h-24 cursor-pointer"
        />

        {/* Social Icons - Only Show on Larger Screens */}
        <div className="hidden md:flex space-x-3 text-lg">
          {SOCIAL_LINKS.map(({ Icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
              <Icon className="text-xl" />
            </a>
          ))}
        </div>

        {/* Toggle Button for Mobile View */}
        <button className="md:hidden text-2xl focus:outline-none pr-3" onClick={handleToggleOpen}>
          {isToggleOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation with Focus Support */}
      <nav className="hidden md:flex justify-center bg-blue-500 text-white w-full">
        <ul className="flex space-x-2 text-lg font-medium">
          {MENU_ITEMS.map((item) => (
            <li
              key={item}
              tabIndex="0" // Makes the menu items focusable
              className={`px-4 py-3 rounded-md transition outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
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

      {/* Mobile Navigation Menu with Animation */}
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
                className={`py-3 px-6 w-full text-center cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  activeComponent === item ? "bg-yellow-500 text-black" : "hover:bg-yellow-300 hover:text-black"
                }`}
                tabIndex="0" // Makes the menu items focusable
                onClick={() => handleMenuClick(item)}
                onKeyDown={(e) => e.key === "Enter" && handleMenuClick(item)} // Keyboard navigation
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

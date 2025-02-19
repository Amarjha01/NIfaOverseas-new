import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Toggle Icons
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"; // Animation
import Home from "./Home";
import Events from "./Events";
import Contact from "./Contact";
import "./components.css";

const MENU_ITEMS = ["Home", "Events", "Contact"];

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleToggleOpen = () => setIsToggleOpen(!isToggleOpen);
  const handleMenuClick = (item) => {
    setActiveComponent(item);
    setIsToggleOpen(false);
  };

  const SOCIAL_LINKS = [
  { Icon: FaInstagram, link: "https://www.instagram.com" },
  { Icon: FaFacebookF, link: "https://www.facebook.com" },
  { Icon: FaYoutube, link: "https://www.youtube.com" },
  { Icon: FaXTwitter, link: "https://twitter.com" },
  { Icon: FaLinkedinIn, link: "https://www.linkedin.com" },
  { Icon: FaPinterestP, link: "https://www.pinterest.com" }
];


    const handleNavigation = (component) => {
    setActiveComponent(component);
    setIsToggleOpen(false); // Close mobile menu on selection
  };

  
  const renderComponent = () => {
    switch (activeComponent) {
      case "Events": return <Events />;
      case "Contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <header className="w-full">
      {/* Logo and Social Links */}
      <div className="px-20 flex items-center justify-between">
        <img
          src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
          alt="Logo"
          className="h-28 cursor-pointer"
          onClick={() => handleNavigation(<Home />)} // Logo Click to Home
          
        />

        {/* Social Icons */}
        <div className="space-x-3 text-lg px-8 absolute right-5 top-20 hidden md:flex">
          {SOCIAL_LINKS.map(({ Icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition">
              <Icon className="text-xl" />
            </a>
          ))}
        </div>

        {/* Toggle Button for Mobile View */}
        <button className="lg:hidden md:hidden text-2xl focus:outline-none pr-3" onClick={handleToggleOpen}>
          {isToggleOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex lg:flex justify-center bg-blue-400 text-white">
        <ul className="flex space-x-1 text-l font-medium">
          {MENU_ITEMS.map((item) => (
            <li
              key={item}
              className={`px-4 py-3 hover:text-black cursor-pointer ${
                activeComponent === item ? "bg-yellow-500 text-black" : ""
              }`}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Menu with Animation */}
      <AnimatePresence>
        {isToggleOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-28 w-full bg-blue-400 text-white flex flex-col items-center lg:hidden"
          >
            {MENU_ITEMS.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`py-3 px-3 w-full text-center hover:text-yellow-500 cursor-pointer ${
                  activeComponent === item ? "bg-yellow-500 text-black" : ""
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Render Active Component */}
      <div className="mt-4 p-5">{renderComponent()}</div>
    </header>
  );
};

export default Header;

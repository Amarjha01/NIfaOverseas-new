import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import './components.css'
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <header className="w-full">

      
      {/* Logo */}
      <div className="px-20 flex">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png"
            alt="Logo"
            className="h-28"
          />
        </Link>
        <div className="flex ml-auto mt-18 space-x-2 text-l">
      {/* Instagram */}
      <Link to="https://www.instagram.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaInstagram />
      </Link>

      {/* Facebook */}
      <Link to="https://www.facebook.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaFacebookF />
      </Link>

      {/* YouTube */}
      <Link to="https://www.youtube.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaYoutube />
      </Link>

      {/* X/Twitter */}
      <Link to="https://twitter.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaXTwitter />
      </Link>

      {/* LinkedIn */}
      <Link to="https://www.linkedin.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaLinkedinIn />
      </Link>

      {/* Pinterest */}
      <Link to="https://www.pinterest.com" target="_blank" className="transform transition-all duration-300 hover:scale-135">
        <FaPinterestP />
      </Link>
    </div>
      </div>

      <div className="lg:bg-blue-400 w-full flex justify-between items-center ">
        {/* Navigation Menu */}
        <ul className="lg:flex flex-1 justify-center space-x-4 text-white font-medium sm:hidden">
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Visitors">Visitors</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Exhibitors">Exhibitors</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Press">Press-&-Media</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Events">Events</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Register">Register To visit</Link>
          </li>
          <li className="hover:text-yellow-500 rounded py-3 px-3">
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        

        

        
      </div> 
      <div className="absolute top-28  flex justify-end w-full">
          <button
            className="lg:hidden text-lack text-2xl focus:outline-none pr-3"
            onClick={handleToggleOpen}
          >
            <FaBars />
        </button>
        {/* Mobile Dropdown Menu */}
<ul
  className={`absolute top-6 w-full bg-blue-400 text-white flex flex-col items-center transition-all duration-500 ease-in-out transform ${
    isToggleOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  } lg:hidden`}
>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/">Home</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/About">About Us</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Visitors">Visitors</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Exhibitors">Exhibitors</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Products">Products</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Press">Press-&-Media</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Events">Events</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Register">Register To visit</Link>
  </li>
  <li className="hover:text-yellow-500 rounded py-3 px-3">
    <Link to="/Contact">Contact Us</Link>
  </li>
</ul>

        </div>
    </header>
  );
};

export default Header;

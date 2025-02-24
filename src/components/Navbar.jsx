import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react"; // Icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]); // Store all anchor tags
  const tl = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline only once
    tl.current = gsap.timeline({ paused: true });

    // 1️⃣ Navbar animation (comes from right to 0)
    tl.current.fromTo(
      menuRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // 2️⃣ Stagger animation for links (after navbar animation finishes)
    tl.current.fromTo(
      linksRef.current, // Target all <a> elements
      { x: 50, opacity: 0 }, // Start off-screen to the left
      { x: 15, opacity: 1, duration: 0.3, stagger: 0.2,  }, // Staggered effect
      "-=0.3" // Overlap slightly with navbar animation for a smoother transition
    );

  }, []); // Runs only once when mounted

  useEffect(() => {
    if (tl.current) {
      isOpen ? tl.current.play() : tl.current.reverse();
    }
  }, [isOpen]); // Runs whenever isOpen changes

  return (
 <>
 <div>

 </div>
    <div className="w-full h-16  inset-0   backdrop-blur-xl fixed top-0 z-50 scroll-smooth ">
      <nav className=" text-white  p-4 shadow-md fixed w-full h-16  flex justify-center">
        <div className="max-w-auto w-[95%] h-full mx-auto px-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="h-[50%] w-[7%] min-w-24 flex items-center">
            <img src="https://nifaoverseas.com/wp-content/uploads/2023/04/nifa-e1681454904741.png" alt="" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-black">
            <a href="#Home" className="hover:text-gray-400">Home</a>
            <a href="#About" className="hover:text-gray-400">About</a>
            <a href="#Services" className="hover:text-gray-400">Services</a>
            <a href="#Contact" className="hover:text-gray-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none cursor-pointer text-[#a9691b]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-40  min-h-96 h-[100vh] bg-[#FEF9E1] text-start  flex flex-col text-black"
        >
          <a ref={(el) => (linksRef.current[0] = el)} href="#Home" className="block p-2 text-lg hover:text-gray-400">Home</a>
          <a ref={(el) => (linksRef.current[1] = el)} href="#About" className="block p-2 text-lg hover:text-gray-400">About</a>
          <a ref={(el) => (linksRef.current[2] = el)} href="#Services" className="block p-2 text-lg hover:text-gray-400">Services</a>
          <a ref={(el) => (linksRef.current[3] = el)} href="#Contact" className="block p-2 text-lg hover:text-gray-400">Contact</a>
        </div>
      </nav>
    </div>
 </>
  );
};

export default Navbar;

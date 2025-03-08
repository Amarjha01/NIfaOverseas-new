import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const splitTextRef = useRef(null);
  const splitImageRef = useRef(null);
  const parallaxTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const finalButtonRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.from(heroTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroTextRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(heroImageRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Diagonal Split Section Animation
    gsap.from(splitTextRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: splitTextRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(splitImageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: splitImageRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Parallax Section Animation
    gsap.from(parallaxTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parallaxTextRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Final Call-to-Action Section Animation
    gsap.from(finalTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: finalTextRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(finalButtonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: finalButtonRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="overflow-hidden ">
      {/* Hero Section */}
      <div className="relative w-full h-screen mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-10 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div
          ref={heroImageRef}
          className="relative w-full sm:w-1/2 h-64 sm:h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}
        ></div>
        <div ref={heroTextRef} className="relative w-full sm:w-1/2 h-full flex flex-col justify-center px-6 sm:px-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Our Story – Preserving India’s Artisan Heritage</h1>
          <p className="text-lg sm:text-xl mb-8">
            At Nifa Overseas, we take immense pride in supporting and empowering Indian artisans. Many of our craftsmen come from families with generations of metalworking experience, and by partnering with them, we help preserve this dying art form.
          </p>
          <a href="#Contact Us" className="bg-teal-700 text-white py-3 px-6 text-lg sm:text-2xl rounded-lg shadow-md hover:bg-teal-800 transition duration-300 cursor-pointer">Join Our Mission</a>
        </div>
      </div>

      {/* Diagonal Split Section */}
      <div className="relative w-full py-20 sm:py-36 text-white px-6 sm:px-10 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-900 opacity-80"></div>
        <div className="relative z-10">
          <div className="relative w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-gradient-to-l from-yellow-500 to-orange-500 p-6 sm:p-10 rounded-3xl shadow-lg transform sm:-skew-x-12">
            <div ref={splitTextRef} className="text-center w-full sm:w-1/2 sm:text-left transform sm:skew-x-12">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-8">Empowering Indian Artisans</h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0 mb-8">
                With the rise of mass production and machine-made goods, handcrafted products are becoming rare. We are committed to ensuring that these skills continue to thrive, providing fair wages, ethical work conditions, and access to the global market for our artisans.
              </p>
            </div>
            <div ref={splitImageRef} className="relative w-full sm:w-1/2 h-64 sm:h-auto transform sm:skew-x-12">
              <div className="absolute inset-0 bg-cover bg-center rounded-3xl" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <div ref={parallaxTextRef} className="relative w-full bg-cover bg-center py-32 px-6 sm:px-10" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">Craftsmanship, Tradition & Sustainability</h2>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto mb-8">
            By choosing Nifa Overseas, you are not just buying décor—you are investing in craftsmanship, tradition, and sustainability.
          </p>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative w-full bg-cover bg-center h-screen flex flex-col justify-center px-6 sm:px-10 text-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div ref={finalTextRef} className="relative z-10 text-white">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6">Join Us in Our Mission</h2>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto mb-8">Help us continue supporting these incredible artisans.</p>
          <a ref={finalButtonRef} href="#support-us" className="bg-teal-700 text-white py-3 px-6 text-lg sm:text-2xl rounded-lg shadow-md hover:bg-teal-800 transition duration-300">Support Artisan Communities</a>
        </div>
      </div>
    </div>
  );
};

export default Story;

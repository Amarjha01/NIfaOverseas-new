import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoEarth, IoPricetag } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { GiEcology } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  const textRefs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="my-10 w-full h-auto text-xl font-bold relative">
      <h2 className="text-5xl p-9">Why Choose Nifa Overseas?</h2>
      <div className="w-full h-auto px-6 flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-1">
        <div className="flex flex-col gap-3">
          {[
            { icon: <IoEarth className="text-3xl text-amber-600" />, text: "Expert Handmade Manufacturers – Over 20 years of artisan experience in crafting high-quality metal décor." },
            { icon: <BiSolidOffer className="text-3xl text-green-500" />, text: "Wholesale Pricing & Bulk Discounts – Competitive rates for small, medium, and large buyers." },
            { icon: <IoIosRocket className="text-3xl text-amber-600" />, text: "Fast Global Shipping – Secure and timely deliveries across the USA, Europe, and worldwide." },
            { icon: <IoPricetag className="text-3xl text-green-500" />, text: "Custom Orders & Branding – Get your logo, labels, and exclusive designs tailored to your needs." },
            { icon: <GiEcology className="text-3xl text-amber-600" />, text: "Ethical & Sustainable Production – Handcrafted using eco-friendly materials, supporting Indian artisans." }
          ].map((item, index) => (
            <h3 key={index} ref={(el) => (textRefs.current[index] = el)} className="flex gap-3 opacity-0">
              {item.icon} {item.text}
            </h3>
          ))}
        </div>
        <div className="lg:w-[50%] h-full flex justify-end bg-white">
          <img
            ref={imgRef}
            src="https://highbix.my.canva.site/nifaoverseasdemo/_assets/media/c07203a47f6c130e6e07f2f957b44852.jpg"
            alt="Why Choose Us"
            className="lg:h-[20vw] opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;

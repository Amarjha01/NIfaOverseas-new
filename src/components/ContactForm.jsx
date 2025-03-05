import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const text1 = useRef();
  const text2 = useRef();

  useGSAP(() => {
    gsap.from(text1.current, {
      y: -50,
      x: -50,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: text1.current,
        start: "top 90%",
        scrub: true,
      },
    });
    gsap.from(text2.current, {
      y: -50,
      x: 50,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        trigger: text2.current,
        start: "top 90%",
        scrub: true,
      },
    });
  });

  const FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqQSaRHsPSU5SmpNnvAVrn1UbSnufgX2ay4Z3Ob3Mzp57LNQ/formResponse";

  const ENTRY_NAME = "entry.1122542914";
  const ENTRY_EMAIL = "entry.924652405";
  const ENTRY_PHONE = "entry.304935982";
  const ENTRY_MESSAGE = "entry.1927596881";

  const [formData, setFormData] = useState({
    [ENTRY_NAME]: "",
    [ENTRY_EMAIL]: "",
    [ENTRY_PHONE]: "",
    [ENTRY_MESSAGE]: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataEncoded = new URLSearchParams(formData).toString();
    const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

    try {
      await fetch(requestUrl, {
        method: "GET",
        mode: "no-cors",
      });

      alert("Form submitted successfully!");
      setFormData({
        [ENTRY_NAME]: "",
        [ENTRY_EMAIL]: "",
        [ENTRY_PHONE]: "",
        [ENTRY_MESSAGE]: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact Us" className="relative w-full flex flex-col items-center justify-center py-10 bg-gray-200 mt-10">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-5">
        <div className="relative flex flex-col items-center text-center mb-12">
          <div className="text-3xl sm:text-4xl font-semibold text-gray-700 flex space-x-1.5">
            <p ref={text1}>Get in</p> <span className="text-orange-600" ref={text2}>touch</span>
          </div>
          <div className="h-1 w-40 bg-orange-600 my-4"></div>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Connect with us to explore authentic, handcrafted treasures that blend tradition with modern artistry. Let’s bring heritage to your space with timeless craftsmanship!
          </p>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6">
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="text"
                name={ENTRY_NAME}
                placeholder="Name"
                value={formData[ENTRY_NAME]}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="email"
                name={ENTRY_EMAIL}
                placeholder="Email Address"
                value={formData[ENTRY_EMAIL]}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="tel"
                name={ENTRY_PHONE}
                placeholder="Phone Number"
                value={formData[ENTRY_PHONE]}
                onChange={handleChange}
                required
              />
              <textarea
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                name={ENTRY_MESSAGE}
                placeholder="Your Message"
                value={formData[ENTRY_MESSAGE]}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full py-3 rounded-md font-semibold text-lg transition cursor-pointer ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-500"}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function CatalogButton() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
  });

  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate button on scroll
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate form when it appears
    if (showForm) {
      gsap.fromTo(
        formRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    }
  }, [showForm]);

  // Google Form submission details
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkAtHQofJSWPqc6ftyT_kwmkU8Ex3Zt4RzbrbKKUblnDapFA/formResponse";
  const ENTRY_COMPANY_NAME = "entry.320503375";
  const ENTRY_EMAIL = "entry.533063009";
  const ENTRY_PHONE = "entry.1215093187";

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data for Google Form
    const formDataEncoded = new URLSearchParams({
      [ENTRY_COMPANY_NAME]: formData.companyName,
      [ENTRY_EMAIL]: formData.email,
      [ENTRY_PHONE]: formData.phone,
    }).toString();

    const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

    try {
      await fetch(requestUrl, {
        method: "GET",
        mode: "no-cors",
      });

      alert("Request submitted successfully! You will receive the catalog via email.");
      setFormData({
        companyName: "",
        email: "",
        phone: "",
      });
      setShowForm(false);
    } catch (error) {
      alert("Error submitting the request!");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Catalogue" className="flex justify-center mt-8">
      {/* Request Catalogue Button */}
      <button
        ref={buttonRef}
        className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-full flex items-center transition-transform duration-300 ease-in-out transform cursor-pointer hover:bg-orange-500 hover:scale-105"
        onClick={() => setShowForm(true)}
      >
        <span className="mr-3 text-lg uppercase">Request Catalogue</span>
        <span className="text-2xl">&#8594;</span>
      </button>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-50">
          <div ref={formRef} className="bg-white p-8 rounded-lg shadow-xl w-11/12 sm:w-96">
            <div className="relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Request the Catalogue</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              {/* Email */}
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Phone Number */}
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-md font-semibold text-lg transition cursor-pointer ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-500"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CatalogButton;

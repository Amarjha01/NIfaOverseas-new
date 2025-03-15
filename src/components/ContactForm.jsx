import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const text1 = useRef();
  const text2 = useRef();
  const fileInputRef = useRef(); // Create a ref for the file input

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

  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqQSaRHsPSU5SmpNnvAVrn1UbSnufgX2ay4Z3Ob3Mzp57LNQ/formResponse";

  const ENTRY_NAME = "entry.1122542914";
  const ENTRY_EMAIL = "entry.924652405";
  const ENTRY_PHONE = "entry.304935982";
  const ENTRY_MESSAGE = "entry.1927596881";
  const ENTRY_FILE_URL = "entry.1138500156"; // Replace with actual entry ID for file URL

  const [formData, setFormData] = useState({
    [ENTRY_NAME]: "",
    [ENTRY_EMAIL]: "",
    [ENTRY_PHONE]: "",
    [ENTRY_MESSAGE]: "",
    [ENTRY_FILE_URL]: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Nifa Contact us File uploads");
    formData.append("resource_type", "raw"); // Ensure the file is uploaded as raw

    try {
      console.log("Starting file upload...");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkdyrgg3q/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("File uploaded:", data);

      if (!data.secure_url) {
        console.error("Upload failed: No URL returned");
        return;
      }

      setFormData((prev) => ({ ...prev, [ENTRY_FILE_URL]: data.secure_url }));
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataEncoded = new URLSearchParams(formData).toString();
    const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

    try {
      await fetch(requestUrl, { method: "GET", mode: "no-cors" });
      alert("Form submitted successfully!");
      setFormData({
        [ENTRY_NAME]: "",
        [ENTRY_EMAIL]: "",
        [ENTRY_PHONE]: "",
        [ENTRY_MESSAGE]: "",
        [ENTRY_FILE_URL]: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input field
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="Contact Us"
      className="relative w-full flex flex-col items-center justify-center py-10  mt-10"
    >
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 mt-5">
        <div className="relative flex flex-col items-center text-center mb-12">
          <div className="text-3xl sm:text-4xl font-semibold text-gray-700 flex space-x-1.5">
            <p ref={text1}>Get in</p>{" "}
            <span className="text-orange-600" ref={text2}>
              touch
            </span>
          </div>
          <div className="h-1 w-40 bg-orange-600 my-4"></div>
        </div>
        <div className=" w-full px-6 flex  flex-col lg:flex-row justify-between gap-10 lg:gap-0 ">
          <div className=" lg:w-[50%] lg:px-6 lg:font-bold text-xl space-y-9 text-center">
            <p className=" text-4xl">Partner with Us – Let’s Grow Together!</p>
            <p>
              Whether you are a small business owner, wholesaler, distributor,
              or global trade buyer, we provide:
            </p>
            <ul className="">
              <li>Low MOQ & Bulk Order Discounts</li>
              <li>Private Labeling & Custom Branding</li>
              <li>Reliable International Shipping</li>
              <li>Sustainable, Handmade Products</li>
            </ul>
            <p>
              Contact Us Today! Let’s discuss how we can help grow your business
              with authentic, handcrafted décor.
            </p>
            <p>Nifa Overseas – Bringing Handmade Heritage to the World</p>
          </div>
          <div className="flex justify-center  lg:w-[50%] ">
            <div className="w-full px-6">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
              >
                <input
                  className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                  type="text"
                  name={ENTRY_NAME}
                  placeholder="Company Name"
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
                <p className="text-sm text-gray-500 mb-2">
                  Please upload a file in image format only.
                </p>

                <input
                  type="file"
                  className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  ref={fileInputRef} // Attach ref to file input
                />
                {uploading && (
                  <p className="text-sm text-gray-500">Uploading file...</p>
                )}
                <button
                  type="submit"
                  className={`w-full py-3 rounded-md font-semibold text-lg transition cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-orange-600 text-white hover:bg-orange-500"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

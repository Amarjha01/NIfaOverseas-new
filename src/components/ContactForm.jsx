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

  const FORM_ACTION_URL ="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdpT_KmkFm2M1ThSkEG81oUihZGk68mLkWLCPeZ0_OKzyVkPw/formResponse";

const ENTRY_NAME = "entry.1263211320";
const ENTRY_EMAIL = "entry.17202855";
const ENTRY_PHONE = "entry.204990205";
const ENTRY_MESSAGE = "entry.567167231";
const ENTRY_FILE_URL = "entry.216404056"; // Replace with actual entry ID for file URL

  const [formData, setFormData] = useState({
    [ENTRY_NAME]: "",
    [ENTRY_EMAIL]: "",
    [ENTRY_PHONE]: "",
    [ENTRY_MESSAGE]: "",
    [ENTRY_FILE_URL]: "", 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);

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
    formData.append("upload_preset", "nifaOverseas"); 
    formData.append("resource_type", "raw"); // Ensure the file is uploaded as raw
  
    try {
      console.log("Starting file upload...");
      const response = await fetch("https://api.cloudinary.com/v1_1/dbnticsz8/upload", {
        method: "POST",
        body: formData,
      });
    
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
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="Contact Us"
      className="relative w-full flex flex-col items-center justify-center py-10 bg-gray-200 mt-10"
    >
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-5">
        <div className="relative flex flex-col items-center text-center mb-12">
          <div className="text-3xl sm:text-4xl font-semibold text-gray-700 flex space-x-1.5">
            <p ref={text1}>Get in</p>{" "}
            <span className="text-orange-600" ref={text2}>
              touch
            </span>
          </div>
          <div className="h-1 w-40 bg-orange-600 my-4"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
            >
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
              <input
                type="file"
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                onChange={handleFileUpload}
                disabled={uploading}
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
  );
};

export default ContactForm;

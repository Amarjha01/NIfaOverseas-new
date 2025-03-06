import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const text1 = useRef();
  const text2 = useRef();

  useGSAP(() => {
    gsap.from(text1.current, {
      y: -50,
      x: -50,
      opacity: 0,
      duration: 1.5,
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
      duration: 1.5,
      scrollTrigger: {
        trigger: text2.current,
        start: "top 90%",
        scrub: true,
      },
    });
  });

  // Google Form action URL and entry IDs
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdpT_KmkFm2M1ThSkEG81oUihZGk68mLkWLCPeZ0_OKzyVkPw/formResponse";

  const ENTRY_NAME = "entry.1263211320";
  const ENTRY_EMAIL = "entry.17202855";
  const ENTRY_PHONE = "entry.204990205";
  const ENTRY_MESSAGE = "entry.567167231";
  const ENTRY_FILE = "entry.216404056"; // Google Form entry for file URL

  const [formData, setFormData] = useState({
    [ENTRY_NAME]: "",
    [ENTRY_EMAIL]: "",
    [ENTRY_PHONE]: "",
    [ENTRY_MESSAGE]: "",
  });

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload file to Cloudinary
  const uploadFileToCloudinary = async () => {
    if (!file) {
      alert("Please select a file first.");
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "nifa_upload"); // Replace with your Cloudinary preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvlh2e6d0/upload",
        formData
      );
      setFileUrl(response.data.secure_url);
      return response.data.secure_url;
    } catch (error) {
      console.error("Upload Error:", error);
      alert("File upload failed!");
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedFileUrl = await uploadFileToCloudinary();
    if (!uploadedFileUrl) return;

    const updatedFormData = {
      ...formData,
      [ENTRY_FILE]: uploadedFileUrl, // Store uploaded file URL
    };

    const formDataEncoded = new URLSearchParams(updatedFormData).toString();
    const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

    try {
      await fetch(requestUrl, { method: "GET", mode: "no-cors" });
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        [ENTRY_NAME]: "",
        [ENTRY_EMAIL]: "",
        [ENTRY_PHONE]: "",
        [ENTRY_MESSAGE]: "",
      });
      setFile(null);
      setFileUrl("");
    } catch (error) {
      console.error("Form submission error:", error);
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
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Connect with us to explore authentic, handcrafted treasures that
            blend tradition with modern artistry. Let’s bring heritage to your
            space with timeless craftsmanship!
          </p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
            >
              {/* Name */}
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="text"
                name={ENTRY_NAME}
                placeholder="Name"
                value={formData[ENTRY_NAME]}
                onChange={handleChange}
                required
              />

              {/* Email and Phone */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
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
              </div>

              {/* Message */}
              <textarea
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                name={ENTRY_MESSAGE}
                placeholder="Your Message"
                value={formData[ENTRY_MESSAGE]}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>

              {/* File Upload */}
              <p className="text-sm text-gray-500 mb-2">Please upload a file in jpg/jpeg, png & svg format only.</p>
              <input
                className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-md font-semibold text-lg hover:bg-orange-500 transition cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

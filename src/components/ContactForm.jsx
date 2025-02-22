// import React, { useState } from "react";

// const ContactForm = () => {
//   const FORM_ACTION_URL =
//     "https://docs.google.com/forms/d/e/1FAIpQLSf_s6geyB6DBgcBNdoQQHAYM1rmjqlZJx_BuoO3Jo1gPeUEGA/formResponse";

//   const ENTRY_NAME = "entry.1058671458";
//   const ENTRY_EMAIL = "entry.1647953686";
//   const ENTRY_PHONE = "entry.402076056";

//   const [formData, setFormData] = useState({
//     [ENTRY_NAME]: "",
//     [ENTRY_EMAIL]: "",
//     [ENTRY_PHONE]: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Convert form data to URL query string
//     const formDataEncoded = new URLSearchParams(formData).toString();
//     const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

//     try {
//       await fetch(requestUrl, {
//         method: "GET", // Google Forms only accepts GET requests
//         mode: "no-cors", // Prevents CORS issues
//       });

//       // Show success alert
//       alert("Form submitted successfully!");

//       // Reset form after submission
//       setFormData({
//         [ENTRY_NAME]: "",
//         [ENTRY_EMAIL]: "",
//         [ENTRY_PHONE]: "",
//       });

//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 3000); // Hide notification after 3 seconds
//     } catch (error) {
//       console.error("Form submission error:", error);
//     }
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center py-10 bg-gray-200">
//       <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
//         {/* Background image */}
//         <div className="relative z-10 flex flex-col items-center text-center mb-12">
//           <p className="text-3xl sm:text-4xl font-semibold text-gray-700">
//             Get in <span className="text-orange-600">touch</span>
//           </p>
//           <div className="h-1 w-40 bg-orange-600 my-4"></div>
//           <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>

//         {/* Form Section */}
//         <div className="flex justify-center w-full">
//           <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
//             <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6">
//               {/* Name & Email Fields */}
//               <div className="flex flex-wrap gap-4 sm:gap-6">
//                 <input
//                   className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
//                   type="text"
//                   name={ENTRY_NAME}
//                   placeholder="Name"
//                   value={formData[ENTRY_NAME]}
//                   onChange={handleChange}
//                   required
//                 />
//                 {/* <input
//                   className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
//                   type="text"
//                   name="LastName"
//                   placeholder="Last Name"
//                 /> */}
//               </div>
//               <div className="flex flex-wrap gap-4 sm:gap-6">
//                 <input
//                   className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
//                   type="email"
//                   name={ENTRY_EMAIL}
//                   placeholder="Email Address"
//                   value={formData[ENTRY_EMAIL]}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
//                   type="tel"
//                   name={ENTRY_PHONE}
//                   placeholder="Phone Number"
//                   value={formData[ENTRY_PHONE]}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Message */}
//               {/* <textarea
//                 className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
//                 name="Message"
//                 placeholder="Message"
//                 rows="4"
//               ></textarea> */}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-orange-600 text-white rounded-md font-semibold text-lg hover:bg-orange-500 transition"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";

const ContactForm = () => {
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdpT_KmkFm2M1ThSkEG81oUihZGk68mLkWLCPeZ0_OKzyVkPw/formResponse";

  const ENTRY_NAME = "entry.1263211320";
  const ENTRY_EMAIL = "entry.17202855";
  const ENTRY_PHONE = "entry.204990205";
  const ENTRY_MESSAGE = "entry.567167231"; // Unique entry for message field (use the correct entry ID from your Google Form)

  const [formData, setFormData] = useState({
    [ENTRY_NAME]: "",
    [ENTRY_EMAIL]: "",
    [ENTRY_PHONE]: "",
    [ENTRY_MESSAGE]: "", // Add message field to the state
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to URL query string
    const formDataEncoded = new URLSearchParams(formData).toString();
    const requestUrl = `${FORM_ACTION_URL}?${formDataEncoded}`;

    try {
      await fetch(requestUrl, {
        method: "GET", // Google Forms only accepts GET requests
        mode: "no-cors", // Prevents CORS issues
      });

      // Show success alert
      alert("Form submitted successfully!");

      // Reset form after submission
      setFormData({
        [ENTRY_NAME]: "",
        [ENTRY_EMAIL]: "",
        [ENTRY_PHONE]: "",
        [ENTRY_MESSAGE]: "", // Reset message field
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Hide notification after 3 seconds
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-10 bg-gray-200">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Background image */}
        <div className="relative z-10 flex flex-col items-center text-center mb-12">
          <p className="text-3xl sm:text-4xl font-semibold text-gray-700">
            Get in <span className="text-orange-600">touch</span>
          </p>
          <div className="h-1 w-40 bg-orange-600 my-4"></div>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center w-full">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6">
              {/* Name & Email Fields */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <input
                  className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
                  type="text"
                  name={ENTRY_NAME}
                  placeholder="Name"
                  value={formData[ENTRY_NAME]}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <input
                  className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
                  type="email"
                  name={ENTRY_EMAIL}
                  placeholder="Email Address"
                  value={formData[ENTRY_EMAIL]}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full lg:w-full sm:w-1/2 p-4 border-gray-300 rounded-md bg-gray-50"
                  type="tel"
                  name={ENTRY_PHONE}
                  placeholder="Phone Number"
                  value={formData[ENTRY_PHONE]}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Section */}
              <div>
                <textarea
                  className="w-full p-4 border-gray-300 rounded-md bg-gray-50"
                  name={ENTRY_MESSAGE}
                  placeholder="Your Message"
                  value={formData[ENTRY_MESSAGE]}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-md font-semibold text-lg hover:bg-orange-500 transition"
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


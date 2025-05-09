import React, { useState } from "react";

const faqs = [
  {
    question: "1. Who are we?",
    answer: `Nifa Overseas is a trusted manufacturer and exporter of handcrafted metal bells and home décor products from India. Our products are made by skilled Indian artisans using eco-friendly materials, ensuring quality, authenticity, and sustainability.`,
  },
  {
    question: "2. What types of bells do you offer?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Christmas Bells – Perfect for holiday décor</li>
        <li>Harmony Bells – For home, garden & spiritual use</li>
        <li>Rustic Lucky Bells – Traditional bells with a vintage finish</li>
        <li>Vastu Bells – Ideal for positive energy & good luck</li>
        <li>Shabby Chic & Vintage Bells – Beautiful decorative pieces</li>
      </ul>
    ),
  },
  {
    question: "3. Do you offer bulk orders and wholesale pricing?",
    answer:
      "Yes! We specialize in bulk B2B orders and offer competitive wholesale pricing for retailers, importers, buying agencies, and decorators worldwide.",
  },
  {
    question: "4. Can I customize the bells with my logo or brand?",
    answer:
      "Yes! We can customize and engrave your logo on our bells. We also offer custom designs and private-label branding for bulk buyers.",
  },
  {
    question: "5. Are your products eco-friendly?",
    answer:
      "Absolutely! Our bells are made using sustainable materials and traditional handmade techniques, ensuring an eco-friendly and ethical production process.",
  },
  {
    question: "6. Where do you ship your products?",
    answer:
      "We export worldwide, with a primary focus on the USA, Europe, and global markets.",
  },
  {
    question: "7. How long does shipping take for bulk orders?",
    answer: (
      <>
        <p>Shipping time depends on order size and location. Generally:</p>
        <ul className="list-disc list-inside">
          <li>Standard Bulk Orders: 3-4 weeks</li>
          <li>Express Orders: Available upon request</li>
        </ul>
      </>
    ),
  },
  {
    question: "8. How can I place an order?",
    answer: (
      <ul className="list-disc list-inside">
        <li>📞 +91 8057109969 | +91 8266043623</li>
        <li>📧 nifaoverseas@gmail.com</li>
        <li>
          🌐{" "}
          <a
            href="https://nifaoverseas.com"
            className="text-blue-600 underline"
          >
            https://nifaoverseas.com
          </a>
        </li>
      </ul>
    ),
  },
  {
    question: "9. Do you work with buying agencies?",
    answer:
      "Yes! We collaborate with buying agencies, wholesalers, importers, and brands to supply handcrafted metal bells at wholesale prices.",
  },
  {
    question: "10. What makes your bells unique?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Handmade by skilled Indian artisans</li>
        <li>Eco-friendly, sustainable, and durable</li>
        <li>Customizable with logos & private-label options</li>
        <li>Perfect for Christmas, home décor, gifting & more</li>
      </ul>
    ),
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6 font-sans">
      <h2 className="text-2xl font-bold mb-6">
        Frequently Asked Questions (Question)
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2 ">
          <button
            onClick={() => toggleAnswer(index)}
            className="flex justify-between w-full text-left font-semibold text-lg"
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="mt-2 text-base">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;

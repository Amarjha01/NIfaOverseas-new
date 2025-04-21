import { useState } from 'react';
import gradient_blur_pink_blue_abstract from '../assets/gradient-blur-pink-blue-abstract.webp';
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const Question = () => {
  const [clicked, setClicked] = useState(null); // Store index instead of boolean

  const handleClick = (index) => {
    setClicked(prev => (prev === index ? null : index)); // Toggle logic
  };

  const questions = [
    { q: 'Who are we?', a: 'Nifa Overseas is a trusted manufacturer and exporter of handcrafted metal bells and home décor products from India. Our products are made by skilled Indian artisans using eco-friendly materials, ensuring quality, authenticity, and sustainability.' },
    { q: 'What types of bells do you offer?', a: 'We specialize in a variety of handcrafted bells, including: Christmas Bells – Perfect for holiday décor 🎄, Harmony Bells – For home, garden & spiritual use 🔔, Rustic Lucky Bells – Traditional bells with a vintage finish ,Vastu Bells – Ideal for positive energy & good luck , Shabby Chic & Vintage Bells – Beautiful decorative pieces' },
    { q: 'Do you offer bulk orders and wholesale pricing?', a: 'Yes! We specialize in bulk B2B orders and offer competitive wholesale pricing for retailers, importers, buying agencies, and decorators worldwide.' },
    { q: 'Can I customize the bells with my logo or brand?', a: 'Yes! We can customize and engrave your logo on our bells. We also offer custom designs and private-label branding for bulk buyers.' },
    { q: 'Are your products eco-friendly?', a: 'Absolutely! Our bells are made using sustainable materials and traditional handmade techniques, ensuring an eco-friendly and ethical production process.' },
    { q: 'Where do you ship your products?', a: 'We export worldwide, with a primary focus on the USA, Europe, and global markets.' },
    { q: ' How long does shipping take for bulk orders?', a: 'Shipping time depends on order size and location. Generally: Standard Bulk Orders: 3-4 weeks ,Express Orders: Available upon request' },
    { q: 'How can I place an order?', a: 'You can contact us directly for bulk orders: +91 8057109969 | +91 8266043623 , nifaoverseas@gmail.com' },
    { q: 'Do you work with buying agencies?', a: 'Yes! We collaborate with buying agencies, wholesalers, importers, and brands to supply handcrafted metal bells at wholesale prices.' },
    { q: 'What makes your bells unique?', a: ' Handmade by skilled Indian artisans , Eco-friendly, sustainable, and durable , Customizable with logos & private-label options , Perfect for Christmas, home décor, gifting & more  ' },
  ];

  return (
    <div className='relative w-[90%] md:h-[800px] flex flex-col md:flex-row items-center gap-1 bg-[#1d3e987b]  my-4 rounded-4xl text-white'>
      <div className='h-full w-full absolute rounded-4xl overflow-hidden'>
        <img src={gradient_blur_pink_blue_abstract} alt="" className='h-full w-full absolute -z-10' />
      </div>

      {/* Mentor Section */}
      <div className='hidden w-full  md:max-w-[40%] p-6 md:p-14 md:flex justify-center items-center'>
        <div className='h-auto w-[100%] p-5 shadow-[0px_5px_40px_#000] backdrop-blur-3xl rounded-xl'>
          <div className='h-auto w-full bg-[#273353] p-5 rounded flex gap-3'>
            <div className='w-[50%] flex items-center'>
              <img src="https://eduverticals.com/assets/images/free-consultation/1.png" alt="" className='w-full' />
            </div>
            <div className='w-[60%] flex flex-col gap-5'>
              <span className='text-2xl font-bold'>Meet Our Mentors</span>
              <p>We have a team of over 12 experienced mentors with over 26+ years of collective experience available to guide you at a moment's notice.</p>
              <button className='w-full py-3 bg-[#1fa016ad] shadow-[0px_5px_40px_#000] rounded-lg'>WhatsApp Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='md:w-[50%] h-auto p-2  flex flex-col  z-30  '>
        <div>
          <div className='space-x-1  '>
            <span className=' text-4xl md:text-7xl font-semibold text-yellow-500'>Got</span>
            <span className=' text-4xl md:text-7xl font-semibold text-[#bd1e2d]'>Questions?</span>
          </div>
<div className=' bg-amber-60 px-5'>
    
{questions.map((item, index) => (
            <div key={index} className="my-2 bg-amber-10 text-start">
              <span className='flex items-center gap-1 cursor-pointer' onClick={() => handleClick(index)}>
                <p className=' text-lg'>{item.q}</p>
                {clicked === index ? <FiMinus /> : <FaPlus />}
              </span>
              {clicked === index && <p className="text-md text-gray-300">{item.a}</p>}
            </div>
          ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default Question;

import { TiDocumentText } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const data = [
  { icon: <FaPhone />, content: "+91 8266043623", href: "tel:+91 8266043623" },
  { icon: <IoMdMail />, content: "nifaoverseas@gmail.com", href: "mailto:nifaoverseas@gmail.com" },
  { icon: <TiDocumentText />, content: "Request Catalogue", href: "#Catalogue" },
];

const FloatingItem = ({ icon, content, href }) => (
  <div className="w-auto h-13 bg-blue-400 flex items-center rounded-bl-[40px] rounded-tl-[40px] hover:-translate-x-[85%] transition duration-500 ease-in-out">
    <div className="h-13 w-13 rounded-full flex justify-center items-center cursor-pointer ">
      <div className="  rounded-full  bg-white text-2xl p-2">
        {icon}
      </div>
    </div>
    <a href={href} className="p-2 mr-1 text-xl font-semibold rounded-full bg-white">
      {content}
    </a>
  </div>
);

const FloatBtn = ({ items = data }) => {
  return (
    <div className="z-20">
      {/* Mobile Vertical Button */}
      <div className="lg:hidden uppercase gruppo-regular z-40 fixed bottom-14 right-1 [writing-mode:vertical-rl] rounded-lg text-white flex items-center justify-center h-44 text-sm w-8 bg-yellow-600 border hover:text-green-500">
        <a href="#Catalogue">Request Catalogue</a>
        <TiDocumentText className="rotate-90" />
      </div>

      {/* Desktop Floating Panel */}
      <div className="hidden fixed top-[50%] right-0 lg:flex lg:flex-col gap-2 translate-x-[85%] ">
        {items.map((item, index) => (
          <FloatingItem
          
            key={index}
            icon={item.icon}
            content={item.content}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatBtn;

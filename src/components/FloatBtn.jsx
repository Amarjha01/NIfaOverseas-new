import { TiDocumentText } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const data =[
  {icon:<FaPhone /> , cntnt:"+91 8266043623"},
  {icon:<IoMdMail /> , cntnt:"nifaoverseas@gmail.com"},
  {icon:<TiDocumentText /> , cntnt:""},
]
const FloatBtn = () => {
  return (
    <div className=" z-20">
      <div className="lg:hidden uppercase gruppo-regular  z-40  fixed bottom-14 right-1 [writing-mode:vertical-rl] rounded-lg text-white flex items-center justify-center h-44 text-sm w-8 bg-yellow-600 border hover:text-green-500">
        <a href="#Catalogue">Request Catalogue</a>
        <TiDocumentText className=" rotate-90 " />
      </div>
      <div className="hidden fixed top-[50%] right-0   lg:flex lg:flex-col gap-2 ">
        
<div className=" w-auto  h-20 bg-blue-400 flex items-center rounded-bl-[40px] rounded-tl-[40px] translate-x-[85%] hover:translate-x-0 transition duration-500 ease-in-out ">
  <div className=" h-20 w-20 rounded-full  flex justify-center items-center cursor-pointer ">
  <FaPhone className=" w-auto h-[80%] rounded-full  bg-white p-4"  />
  </div>
  <a href="tel:+91 8266043623" className=" p-2 mr-1 text-4xl font-semibold rounded-full bg-white">+91 8266043623</a>
</div>

<div className=" w-auto  h-20 bg-blue-400 flex items-center rounded-bl-[40px] rounded-tl-[40px] translate-x-[85%] hover:translate-x-0 transition duration-500 ease-in-out">
  <div className=" h-20 w-20 rounded-full  flex justify-center items-center cursor-pointer ">
  <IoMdMail className=" w-auto h-[80%] rounded-full  bg-white p-4"  />
  </div>
  <a href="mailto:nifaoverseas@gmail.com" className=" p-2 mr-1 text-4xl font-semibold rounded-full bg-white">nifaoverseas@gmail.com</a>
</div>
<div className=" w-auto h-20 bg-blue-400 flex items-center rounded-bl-[40px] rounded-tl-[40px] translate-x-[85%] hover:translate-x-0 transition duration-500 ease-in-out">
  <div className=" h-20 w-20 rounded-full  flex justify-center items-center cursor-pointer ">
  <TiDocumentText className=" w-auto h-[80%] rounded-full  bg-white p-4"  />
  </div>
  <a href="#Catalogue" className=" p-2 mr-1 text-4xl font-semibold rounded-full bg-white">Request Catalogue</a>
</div>
      </div>
    </div>
  );
};

export default FloatBtn;

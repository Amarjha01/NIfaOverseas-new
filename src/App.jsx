import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Video from "./components/Video";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
import Stats from "./components/Stats";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import Catalogue from "./components/Catalogue";
import Serve from "./components/Serve"
import Choose from "./components/Choose";
import Category from "./components/Category"
import Story from "./components/Story"
import Slider from "./components/Slider";
import Customization from "./components/Customization";
import FloatBtn from "./components/FloatBtn";


const App = () => {
  const [showBanner, setShowBanner] = useState(true); // Controls banner visibility


  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth ">
      {showBanner && <Banner onClose={() => {
        setShowBanner(false);
      }} />}
      <FloatBtn />
      <Header />
      <Video />
      <Stats />
      <About />
      <Story />
      <ImageGallery />
      <Category />
      <Slider />
      <Customization />
      <Choose />
      <Serve />
      <Catalogue />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

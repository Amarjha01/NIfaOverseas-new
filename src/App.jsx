import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
import Stats from "./components/Stats";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";

const App = () => {
  const [showBanner, setShowBanner] = useState(true); // Controls banner visibility

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      {showBanner && <Banner onClose={() => setShowBanner(false)} />} 
      <Header />
      <HeroSection />
      <Stats />
      <About />
      <ImageGallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

import Header from "./components/Header"
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import './App.css'
import Stats from "./components/Stats";
import About from "./components/About";
const App = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden ">
      <Header />
      <HeroSection />
      <Stats />
      <About />
      <ImageGallery />
      <Footer />

    </div>
  );
};

export default App;


import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;

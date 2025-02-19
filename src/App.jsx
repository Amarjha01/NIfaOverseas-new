import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;

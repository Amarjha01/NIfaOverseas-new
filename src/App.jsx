import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 🆕 Added for routing

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
import Serve from "./components/Serve";
import Choose from "./components/Choose";
import Category from "./components/Category";
import Story from "./components/Story";
import Slider from "./components/Slider";
import Customization from "./components/Customization";
import FloatBtn from "./components/FloatBtn";
import { Helmet } from "react-helmet-async";
import Question from "./components/Question";

// 🆕 Blog component
import Blog from "./components/Blog"; // Make sure Blog.jsx exists in components folder

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true); // Controls banner visibility

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth max-w-[1480px]">
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      <Helmet>
        <title>Wholesale Handmade Bells & Décor – Artisan Craftsmanship</title>
        <meta name="description" content="Shop handcrafted bells & aesthetic home décor at wholesale prices. Perfect for Christmas, e-commerce, and retailers seeking authentic artisan craftsmanship." />
        <link rel="canonical" href="https://nifaoverseas.com/" />
        <meta name="keywords" content="home decoration, aesthetic, bell, bells, e-commerce, artisan, craftsmanship, Christmas wholesale price, Handicrafts wholesale online in India" />
        <meta name="author" content="Tabrez Mirza" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Wholesale Handmade Bells & Décor – Artisan Craftsmanship" />
        <meta property="og:description" content="Shop handcrafted bells & aesthetic home décor at wholesale prices. Perfect for Christmas, e-commerce, and retailers seeking authentic artisan craftsmanship." />
        <meta property="og:url" content="https://nifaoverseas.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="nifaoverseas" />
        <meta property="og:image" content="https://res.cloudinary.com/dbnticsz8/image/upload/v1742204675/febTech/Nifa/kb9p9mnwrz5ruhposfg3.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/jpeg" />
      </Helmet>
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
      <Question />
      <Choose />
      <Serve />
      <Catalogue />
      <ContactForm />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;

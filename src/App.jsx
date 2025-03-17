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
import { Helmet } from "react-helmet-async";

const App = () => {
  const [showBanner, setShowBanner] = useState(true); // Controls banner visibility


  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth ">
      {showBanner && <Banner onClose={() => {
        setShowBanner(false);
      }} />}
      <Helmet>
        {/* Global SEO metadata */}
      	<title>Wholesale Handmade Metal Décor, Indian Handicrafts</title>
        <meta name="description" content="Discover stunning handmade metal décor at wholesale prices. Shop authentic Indian handicrafts and metal decorative items for your business today!" />
		    <link rel="canonical" href="https://nifaoverseas.com/" />
        <meta name="keywords" content="Metal decorative items, handicraft products, handcrafted products, Best handicraft metal home decor wholesale, Wholesale handmade products, Handicrafts wholesale online in India" />
        <meta name="author" content="Tabrez Mirza" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Wholesale Handmade Metal Décor, Indian Handicrafts" />
        <meta property="og:description" content="Discover stunning handmade metal décor at wholesale prices. Shop authentic Indian handicrafts and metal decorative items for your business today" />
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
      <Choose />
      <Serve />
      <Catalogue />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

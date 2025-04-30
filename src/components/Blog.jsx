import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaHome } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import Footer from "./Footer";
import logo1 from "../assets/nifa1.jpg";
import logo2 from "../assets/nifa2.jpg";
import logo3 from "../assets/nifa3.webp";
import logo4 from "../assets/nifa4.webp";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/nifa6.jpg";
import logo7 from "../assets/nifa7.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";

// Sample blog data - You can add more blogs following this structure
const blogData = [
  {
    id: 1,
    title: "Celebrate Craftsmanship with Nifa Overseas: Handmade Metal Bells & Décor",
    image: logo1,
    shortDesc:
      "In a world full of fast, factory-made goods, the charm of traditional craftsmanship stands out. At Nifa Overseas, we’re proud to bring that charm to life with our collection of handmade metal bells and rustic home décor.",
    longDesc: {
      intro:
        "Since 2020, we've partnered with skilled Indian artisans to create products that are not only beautiful but also sustainable. Each piece is carefully made by hand, using techniques passed down through generations. Whether it's a set of rustic hanging bells wholesale for a boutique or unique accents for holiday displays, our products carry the warmth of tradition and the soul of craftsmanship.",
      sections: [
        {
          heading: "Ethical, Eco-Friendly, and Full of Story",
          content:
            "As a trusted eco-friendly bells supplier, we believe in doing business the right way. That means fair wages, safe working conditions, and sustainable materials. Every bell and décor item we offer helps support local communities and preserve India’s rich artisan heritage.",
        },
        {
          heading: "Who We Work With",
          content:
            "From interior designers and e-commerce sellers to large-scale retailers, we serve clients across the USA, Europe, and beyond. If you're looking for Indian handicraft bells wholesale, Nifa Overseas is your reliable partner for quality and authenticity.",
        },
        {
          heading: "",
          content:
            "Bring timeless design and cultural richness into your space with Nifa’s handcrafted treasures.",
        },
        {
          heading: "",
          content:
            "",
        },
        {
          heading: "",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-04-10T15:30:00",
  },
  {
    id: 2,
    title: "Add Heritage to Your Space with Nifa Overseas Indian Bells",
    image: logo2,
    shortDesc:
      "Handcrafted Indian Bells That Celebrate Tradition, Beauty, and Meaningful Gifting.",
    longDesc: {
      intro:
        "Decorating your home is more than just design—it's about creating a space that feels soulful and connected. One of the most elegant ways to do this is with Indian handcrafted bells that blend tradition, artistry, and meaning.",
      sections: [
        {
          heading: "Handcrafted Bells That Echo Tradition and Timeless Craftsmanship",
          content:
            "At Nifa Overseas, we take pride in creating bells that are more than décor—they're expressions of heritage. Each piece is carefully handmade by skilled artisans using age-old techniques passed down through generations.",
        },
        {
          heading: "Celebrate Every Occasion with the Charm of Tradition and Positivity",
          content:
            "Looking for a thoughtful gift? Our collection of traditional Indian bells for gifting is perfect for festivals, housewarmings, and special occasions. These bells symbolize positivity and grace, making them a meaningful choice for loved ones.",
        },
        {
          heading: "Authentic Indian Bells to Elevate Every Space with Rustic Spiritual Charm",
          content:
            "We also offer authentic Indian bells for decoration, ideal for both indoor and outdoor settings. From cozy living rooms to tranquil garden corners, these bells add a rustic, spiritual charm wherever they are placed.",
        },
        {
          heading: "Timeless Craftsmanship for Every Curated Collection",
          content:
            "Whether you're a boutique owner, designer, or simply love handcrafted beauty—Nifa Overseas delivers heritage, quality, and soul in every piece.",
        },
        {
          heading: "",
          content:
            "🌿 Bulk orders available | Ethically crafted | Ships worldwide",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-04-08T15:30:00",
  },
  {
    id: 3,
    title: "Elevate Spaces with Handmade Metal Bells – Nifa overseas",
    image: logo3,
    shortDesc:
      "Looking to add charm and character to your surroundings? Home and garden decorative bells are a timeless choice. Whether hung on a porch, used as wind chimes, or styled indoors, these bells bring a rustic, soulful vibe to any space.",
    longDesc: {
      intro:
        "At Nifa Overseas, we specialize as a handmade metal bells manufacturer, offering a beautiful range of artisan-crafted bells perfect for both indoor and outdoor décor. Each piece is handcrafted in India, blending traditional metalworking techniques with modern design appeal.",
      sections: [
        {
          heading: "Handcrafted Bells That Echo Tradition and Timeless Craftsmanship",
          content:
            "As a leading supplier of Indian handicraft bells wholesale, we proudly serve retailers, e-commerce stores, and interior designers across the globe. Our bells are not only decorative—they tell stories of heritage, sustainability, and skilled craftsmanship passed down through generations.",
        },
        {
          heading: "Celebrate Every Occasion with the Charm of Tradition and Positivity",
          content:
            "Looking for a thoughtful gift? Our collection of traditional Indian bells for gifting is perfect for festivals, housewarmings, and special occasions. These bells symbolize positivity and grace, making them a meaningful choice for loved ones.",
        },
        {
          heading: "Authentic Indian Bells to Elevate Every Space with Rustic Spiritual Charm",
          content:
            "We also offer authentic Indian bells for decoration, ideal for both indoor and outdoor settings. From cozy living rooms to tranquil garden corners, these bells add a rustic, spiritual charm wherever they are placed.",
        },
        {
          heading: "Timeless Craftsmanship for Every Curated Collection",
          content:
            "🌿 Bulk orders available | Ethically crafted | Ships worldwid.",
        },
        {
          heading: "",
          content:
            "Where metal meets soul—handmade bells that bring beauty, peace, and tradition into every space.",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-04-07T15:30:00",
  },
  {
    id: 4,
    title: "Nifa Overseas: Bringing Handmade Metal Bells & Home Decor to the World",
    image: logo4,
    shortDesc:
      "",
    longDesc: {
      intro:
        "Since 2020, Nifa Overseas has been a leading manufacturer and exporter of handcrafted metal bells and home decor. Our pieces blend tradition, sustainability, and fine craftsmanship, ensuring every item tells a story of heritage and skill. Handmade in India, our rustic bells and metal decor are perfect for Christmas, vintage collections, and timeless interiors.",
      sections: [
        {
          heading: "Craftsmanship Rooted in Tradition",
          content:
            "Each product is a reflection of India’s centuries-old artisan techniques, passed down through generations. By working directly with skilled craftsmen, we preserve these traditional methods while ensuring fair wages and ethical working conditions.",
        },
        {
          heading: "Sustainability & Ethical Production",
          content:
            "We take pride in offering eco-friendly, high-quality decor that supports sustainable sourcing and responsible manufacturing. Every piece is crafted with passion, keeping artistry alive in an age of mass production.",
        },
        {
          heading: "Your Trusted Wholesale Partner",
          content:
            "At Nifa Overseas, we cater to wholesalers, retailers, e-commerce businesses, and interior designers across the USA, Europe, and beyond. Whether you run a boutique or a large-scale business, we provide reliable wholesale home decoration items to suit your needs.",
        },
        {
          heading: "What Wholesale Means",
          content:
            "Wholesale refers to the process of selling goods in large quantities at lower prices, typically to retailers or businesses that resell them to end consumers. At Nifa Overseas, we specialize in wholesale home decoration items, ensuring top-notch quality and competitive pricing for bulk buyers.",
        },
        {
          heading: "",
          content:
            "✨ Every product we offer isn’t just decor—it’s a legacy of craftsmanship and authenticity. ✨",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-04-02T15:30:00",
  },
  {
    id: 5,
    title: "Nifa Overseas: Bulk Supplier of Handmade Metal Bells & Home Decorative Items",
    image: logo2,
    shortDesc:
      "Bringing Heritage to Your Home",
    longDesc: {
      intro:
        "Since 2020, Nifa Overseas has been a trusted name in manufacturing and exporting handmade metal bells and home décor that reflect India’s rich artisan heritage. Our meticulously crafted products not only add aesthetic charm but also promote sustainability by empowering local artisans. Each piece blends tradition with modern design, making them perfect for rustic settings and festive occasions like Christmas.",
      sections: [
        {
          heading: "✨ Our Commitment to Craftsmanship ✨",
          content:
            "We collaborate with skilled artisans, many of whom come from families with generations of metalworking expertise. By offering fair wages and ethical work conditions, we ensure that their craftsmanship thrives in the modern marketplace. Our handcrafted pieces are not just décor items—they are timeless stories of tradition and dedication.",
        },
        {
          heading: "Why Choose Nifa Overseas?",
          content:
            "Ethically Made: Our production ensures fair wages and ethical practices. Eco-Friendly Décor: Sustainable and handcrafted pieces designed to last. Versatile Appeal: Ideal for homes, boutiques, and festive displays.",
        },
        {
          heading: "Who We Serve – Bulk Orders with Global Reach",
          content:
            "Whether you're a small retailer, e-commerce seller, or large-scale wholesaler, Nifa Overseas caters to bulk orders while maintaining the highest quality standards. Our handcrafted home decorative items are supplied across the USA, Europe, and other international markets, meeting diverse demands and preferences.",
        },
        {
          heading: "Preserving India’s Artisan Heritage",
          content:
            "By partnering with local artisans, we help preserve India’s rich artistic traditions. Every piece crafted at Nifa Overseas is a testament to the skill and passion of Indian artisans, ensuring that their art continues to thrive globally.",
        },
        {
          heading: "🌍 Explore Our Collection Today 🌍",
          content:
            "If you're looking for bulk orders or unique home decorative items that stand out, Nifa Overseas is your ideal partner. Experience the beauty of handcrafted elegance and bring timeless artistry to your space!",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-25T15:30:00",
  },
  {
    id: 6,
    title: "Crafting Heritage: Handmade Metal Bells & Décor by Nifa Overseas",
    image: logo5,
    shortDesc:
      "Nifa Overseas – a name synonymous with timeless craftsmanship and ethical artistry. Since 2020, we’ve been a leading manufacturer and exporter of handmade metal bells and home décor, blending tradition with modern aesthetics. Our products are not just home accents—they are stories of Indian arts, heritage, and sustainability.",
    longDesc: {
      intro:
        "Why Choose Nifa Overseas?",
      sections: [
        {
          heading: "1. Authentic Craftsmanship",
          content:
            "Our handcrafted metal décor is created by skilled artisans, many of whom hail from generations of metalworking families. Each piece reflects meticulous detailing and unmatched quality, making them perfect for home decoration wholesale or festive décor.",
        },
        {
          heading: "2. Sustainable & Eco-friendly Designs",
          content:
            "We take pride in offering eco-conscious products that promote sustainability. Our handcrafted treasures resonate globally, making them a perfect fit for e-commerce sellers, retailers, and interior designers seeking sustainable solutions.",
        },
        {
          heading: "3. Empowering Indian Artisans",
          content:
            "Mass production threatens traditional craftsmanship. At Nifa Overseas, we empower artisans by providing fair wages, ethical work conditions, and global exposure, ensuring these dying art forms thrive.",
        },
        {
          heading: "Our Collection – Perfect for Every Occasion",
          content:
            "Rustic Metal Bells: Ideal for Christmas, weddings, and rustic settings. Each bell is crafted with attention to detail, adding a vintage charm to any décor. Aesthetic Home Décor: Our metal décor pieces reflect heritage with a contemporary touch, appealing to modern buyers.",
        },
        {
          heading: "🌍 Explore Our Collection Today 🌍",
          content:
            "We cater to wholesalers, retailers, and e-commerce platforms across the USA, Europe, and beyond. Whether you’re a boutique or a large-scale wholesaler, we offer customized solutions tailored to your business needs.",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-19T15:30:00",
  },
  {
    id: 7,
    title: "Nifa Overseas: Bringing Handmade Metal Bells & Home Decor to the World",
    image: logo6,
    shortDesc:
      "",
    longDesc: {
      intro:
        "Since 2020, Nifa Overseas has been a leading manufacturer and exporter of handcrafted metal bells and home decor. Our pieces blend tradition, sustainability, and fine craftsmanship, ensuring every item tells a story of heritage and skill. Handmade in India, our rustic bells and metal decor are perfect for Christmas, vintage collections, and timeless interiors.",
      sections: [
        {
          heading: "What Wholesale Means?",
          content:
            "Wholesale refers to the process of selling goods in large quantities at lower prices, typically to retailers or businesses that resell them to end consumers. At Nifa Overseas, we specialize in wholesale home decoration items, ensuring top-notch quality and competitive pricing for bulk buyers.",
        },
        {
          heading: "Craftsmanship Rooted in Tradition",
          content:
            "Each product is a reflection of India’s centuries-old artisan techniques, passed down through generations. By working directly with skilled craftsmen, we preserve these traditional methods while ensuring fair wages and ethical working conditions.",
        },
        {
          heading: "Sustainability & Ethical Production",
          content:
            "At Nifa Overseas, we cater to wholesalers, retailers, e-commerce businesses, and interior designers across the USA, Europe, and beyond. Whether you run a boutique or a large-scale business, we provide reliable wholesale home decoration items to suit your needs.",
        },
        {
          heading: "Your Trusted Wholesale Partner",
          content:
            "At Nifa Overseas, we cater to wholesalers, retailers, e-commerce businesses, and interior designers across the USA, Europe, and beyond. Whether you run a boutique or a large-scale business, we provide reliable wholesale home decoration items to suit your needs.",
        },
        {
          heading: "Every product we offer isn’t just decor—it’s a legacy of craftsmanship and authenticity.",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-13T15:30:00",
  },
  {
    id: 8,
    title: "Wholesale Home Decoration Items",
    image: logo7,
    shortDesc:
      "The Art of Handcrafted Elegance – Nifa Overseas",
    longDesc: {
      intro:
        "In a world dominated by mass production, Nifa Overseas stands as a beacon of authenticity, craftsmanship, and sustainability. Since 2020, we have been dedicated to creating exquisite handmade metal bells and wholesale home decoration items, blending heritage with modern aesthetics. Each piece we offer is a testament to the skill of Indian artisans, preserving age-old techniques while ensuring top-notch quality.",
      sections: [
        {
          heading: "Craftsmanship Rooted in Tradition",
          content:
            "Our artisanal décor is not just about aesthetics; it’s about storytelling. Every metal bell and décor piece is shaped by skilled craftsmen who have inherited their techniques from generations before them. By choosing Nifa Overseas, you’re not just purchasing a product—you’re owning a piece of history, culture, and sustainable artistry.",
        },
        {
          heading: "Ethical & Sustainable Production",
          content:
            "We take pride in supporting Indian artisans with fair wages, ethical working conditions, and global market access. Our products reflect this commitment, crafted with eco-friendly materials and designed to last. Whether for Christmas decor, rustic home settings, or unique interior accents, our handcrafted treasures add warmth and authenticity to any space.",
        },
        {
          heading: "What Are Handicraft Items?",
          content:
            "Handicraft items—also known as artisanal crafts, traditional crafts, handmade artifacts, or folk art—are products created using age-old techniques passed down through generations. At Nifa Overseas, our artisans craft handmade home decor with meticulous attention to detail, ensuring each piece is unique and of the highest quality.",
        },
        {
          heading: "Your Trusted Wholesale Partner",
          content:
            "Catering to wholesalers, retailers, e-commerce sellers, and interior designers, we provide high-quality handmade home decor items tailored to various markets. Whether you’re a small boutique or a large-scale distributor, we offer customizable solutions to meet your needs.",
        },
        {
          heading: "",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-12T15:30:00",
  },
  {
    id: 9,
    title: "Bring Harmony Home: Vastu Bells & Handmade Metal Décor by Nifa Overseas",
    image: logo7,
    shortDesc:
      "Handmade Vastu bells designed to balance energy and beautify your space.",
    longDesc: {
      intro:
        "In today’s fast-paced world, home is where we seek peace and balance. That’s why more people are turning to traditional décor elements that not only beautify a space but also bring positive energy. One such timeless piece? Vastu bells for home décor—and no one does it better than Nifa Overseas, a trusted handmade metal bells manufacturer in India.",
      sections: [
        {
          heading: "Why Choose Vastu Bells for Your Home?",
          content:
            "Rooted in ancient Indian design principles, Vastu bells are believed to attract positive energy and drive away negativity. Placing them near doors, windows, or spiritual corners of the home creates a calming atmosphere and brings a sense of balance to your space. These bells are not just spiritual tools—they’re also elegant decorative pieces that add a rustic, handcrafted charm to your interior or garden setup.",
            
        },
        {
          heading: "Made by Hand, Inspired by Tradition",
          content:
            "As a leading handmade metal bells manufacturer, Nifa Overseas is proud to support Indian artisans who carry forward generations of metalworking skills. Every bell is: Handcrafted with precision and care, Made from durable, high-quality metals, Designed with both aesthetic and Vastu principles in mind, Whether you're looking to enhance your meditation space, entranceway, or festive décor, these bells make a beautiful and meaningful addition.",
        },
        {
          heading: "For Wholesalers & Home Stylists Alike",
          content:
            "Nifa Overseas caters to everyone—from home décor enthusiasts to interior designers and wholesale buyers across the globe. If you’re in search of authentic, artisan-crafted bells in bulk or for personal use, you’ll find unmatched quality and timeless charm in every piece.",
        },
        {
          heading: "Balance, Beauty & Craftsmanship",
          content:
            "Decorating with Vastu bells isn’t just about following tradition—it’s about creating a space that feels right. With Nifa Overseas, you get more than décor. You bring home heritage, harmony, and handcrafted beauty.",
        },
        {
          heading: "",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-12T15:30:00",
  },
  {
    id: 10,
    title: "Timeless Charm: Indian Handcrafted Bells for Gifting & Décor",
    image: logo7,
    shortDesc:
      "",
    longDesc: {
      intro:
        "When it comes to adding beauty and tradition to your space, few things are as unique and meaningful as Indian handcrafted bells. These small yet elegant pieces carry more than just sound—they carry culture, craftsmanship, and centuries of tradition.At Nifa Overseas, each bell is made by skilled Indian artisans using age-old techniques passed down through generations. Whether it’s for home décor or a thoughtful gift, these bells add a rustic, spiritual, and artistic touch that truly stands out.",
      sections: [
        {
          heading: "Why Choose Traditional Indian Bells for Gifting?",
          content:
            "If you're looking for something special and different, traditional Indian bells for gifting are a perfect choice. They’re: Meaningful: Symbolizing peace and positive energy.,Eco-friendly: Handmade using sustainable methods.,Versatile: Perfect for housewarmings, weddings, festive celebrations, or spiritual occasions. Gifting a handcrafted bell isn’t just giving an item—it's sharing a piece of Indian heritage.",
            
        },
        {
          heading: "Authentic Indian Bells for Decoration",
          content:
            "Whether you’re decorating a cozy corner, your garden, or your festive setup, authentic Indian bells for decoration bring a serene and traditional feel. You can: Hang them at the entrance for a welcoming charm , Use them in spiritual corners or meditation spaces, Mix them into festive or wedding décor for an earthy, elegant look. These bells are timeless pieces that fit beautifully into both modern and traditional spaces.",
        },
        {
          heading: "A Beautiful Tradition to Keep",
          content:
            "With the world moving toward thoughtful, sustainable living, handcrafted bells from India offer both beauty and purpose. Explore the charm of traditional Indian artistry through every piece made at Nifa Overseas, and let your décor tell a story of heritage and heart.",
        },
        {
          heading: "",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-12T15:30:00",
  },
  {
    id: 11,
    title: "Add a Touch of Tradition to Your Mandir This Hanuman Jayanti with Nifa Overseas",
    image: logo7,
    shortDesc:
      "",
    longDesc: {
      intro:
        "As we celebrate Hanuman Jayanti, a festival that honors devotion, strength, and tradition, there’s no better time to refresh your mandir decoration with something meaningful and timeless. At Nifa Overseas, we craft handmade metal bells and décor that echo India’s rich spiritual and cultural heritage. Perfect for mandir decoration items, our rustic bells are more than just ornaments—they carry the essence of devotion, handcrafted by skilled Indian artisans using generations-old techniques.",
      sections: [
        {
          heading: "Traditional Craftsmanship for Sacred Spaces",
          content:
            "Whether you're decorating a home temple or preparing for a community celebration, our bells add an authentic, spiritual vibe. As a trusted eco-friendly bells supplier, Nifa Overseas offers beautiful, sustainable options that are ideal for mandir use—bringing soft chimes and a serene ambiance to your worship space.",
            
        },
        {
          heading: "Why Choose Nifa for Mandir Decoration",
          content:
            "Ethically made by Indian artisans , deal for Hanuman Jayanti and other festivals , Available in rustic hanging bells wholesale for bulk buyers , Perfect for spiritual settings and festive décor. Celebrate the divine spirit of Hanuman Jayanti with handcrafted mandir decoration items that reflect devotion, heritage, and sustainability.",
        },
        {
          heading: "",
          content:
            "",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-12T15:30:00",
  },
  {
    id: 12,
    title: "Timeless Decoration for Wedding Celebrations with Handcrafted Charm",
    image: logo7,
    shortDesc:
      "",
    longDesc: {
      intro:
        "Weddings are a celebration of love, tradition, and togetherness. And the décor you choose plays a big role in bringing that magic to life. When it comes to finding truly memorable decoration for wedding events, more couples are turning to handcrafted and meaningful elements that go beyond trends—and speak to the heart.",
      sections: [
        {
          heading: "Why Handcrafted Décor Stands Out",
          content:
            "In a world of mass-produced pieces, handcrafted wedding décor brings warmth and authenticity. Think rustic bells, brass accents, earthy tones, and heritage-inspired pieces—each item tells a story and creates a setting that's personal and unforgettable., At Nifa Overseas, we craft handmade metal bells and traditional Indian accents that add timeless elegance to weddings. These bells aren’t just beautiful; they carry cultural significance and create a peaceful, spiritual atmosphere that guests truly remember."
        },
        {
          heading: "Ways to Use Bells in Wedding Décor",
          content:
            "Looking for creative ways to elevate your wedding decoration? Here are a few ideas: Entrance Decor: Hang metal bells at the entrance for a warm, welcoming vibe. , Mandap or Altar Accents: Place bells around the ceremonial space to enhance its traditional and sacred feel. , Table Centerpieces: Use small bells with floral arrangements for a charming, rustic look., Wedding Favors: Give guests a mini handcrafted bell as a keepsake they'll cherish. , ",
        },
        {
          heading: "Add a Touch of Culture & Craftsmanship",
          content:
            "Whether your wedding style is grand and festive or simple and soulful, adding handcrafted elements makes it truly one of a kind. With global shipping and bulk order options, Nifa Overseas helps couples and wedding planners create meaningful, elegant décor with ease.",
        },
      ],
    },
    extraImages: [logo2, logo2],
    dateUploaded: "2025-03-12T15:30:00",
  },
];


// Navigation buttons component - to be reused with responsive design
const NavigationButtons = ({ onPrevious, onNext, hasPrevious, hasNext, onClose }) => (
  <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
    <button
      onClick={onPrevious}
      disabled={!hasPrevious}
      className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
        hasPrevious
          ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      <FaChevronLeft className="animate-pulse" /> 
      <span className="hidden sm:inline">Previous</span>
    </button>
    
    {onClose && (
      <button
        onClick={onClose}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-lg text-xs sm:text-sm md:text-base mx-1 sm:mx-2"
      >
        <FaHome /> 
        <span className="hidden sm:inline">All Blogs</span>
      </button>
    )}
    
    <button
      onClick={onNext}
      disabled={!hasNext}
      className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
        hasNext
          ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
    >
      <span className="hidden sm:inline">Next</span> 
      <FaChevronRight className="animate-pulse" />
    </button>
  </div>
);

// Blog card component - displays preview of each blog
const BlogCard = ({ blog, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-2xl border-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-orange-200 hover:border-orange-300 flex flex-col h-full transform hover:-translate-y-2"
  >
    <div className="overflow-hidden h-40 sm:h-52 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2 sm:mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
        {blog.title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-3 sm:mb-4 flex-grow">{blog.shortDesc}</p>
      <div className="mt-auto">
        <p className="text-gray-400 text-xs mb-2 sm:mb-3">
          {new Date(blog.dateUploaded).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="text-orange-500 flex items-center gap-1 sm:gap-2 font-medium group-hover:text-orange-600 transition-colors text-sm sm:text-base">
          Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </div>
);

// Expanded blog component - displays full blog content with responsive design
const ExpandedBlogCard = ({ blog, refProp, onPrevious, onNext, hasPrevious, hasNext, onClose }) => (
  <div
    ref={refProp}
    className="bg-white w-full rounded-2xl shadow-xl border-2 border-orange-400 mb-12 overflow-hidden transition-all duration-500 animate-fadeIn"
  >
    {/* Top Navigation buttons */}
    <div className="sticky top-2 sm:top-4 z-20 mx-2 sm:mx-4 md:mx-6 mt-2 sm:mt-4">
      <NavigationButtons 
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        onClose={onClose}
      />
    </div>
    
    {/* Hero section with image */}
    <div className="relative h-64 sm:h-80 md:h-96 mt-4 sm:mt-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">{blog.title}</h2>
        <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-4">
          {new Date(blog.dateUploaded).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>

    {/* Content section */}
    <div className="p-4 sm:p-6 md:p-10">
      <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <p className="text-base sm:text-lg font-semibold text-orange-600 border-l-4 border-orange-500 pl-3 sm:pl-4">Introduction</p>
        <p className="text-base sm:text-lg">{blog.longDesc.intro}</p>

        {blog.longDesc.sections.map((section, index) => (
          section.heading && section.content ? (
            <div key={index} className="my-6 sm:my-8">
              <h3 className="text-lg sm:text-xl font-semibold text-green-600 mt-4 sm:mt-6 mb-3 sm:mb-4 border-b border-green-200 pb-2">
                {section.heading}
              </h3>
              <p>{section.content}</p>
            </div>
          ) : null
        ))}

        <div className="text-center text-xs sm:text-sm text-gray-600 mt-8 sm:mt-12 pt-4 sm:pt-6 border-t">
          For more information, visit{" "}
          <a
            href="https://nifaoverseas.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline font-medium hover:text-orange-700"
          >
            Nifa Overseas
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Navigation buttons */}
    <div className="p-3 sm:p-6 bg-gray-50 border-t border-gray-200">
      <NavigationButtons 
        onPrevious={onPrevious}
        onNext={onNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        onClose={onClose}
      />
    </div>
  </div>
);

// Main Blog component
const Blog = () => {

  const [expandedId, setExpandedId] = useState(null);
  const expandedRef = useRef(null);
  const [animating, setAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null); // 'next', 'prev', or null

  // Function to handle card click
  const handleCardClick = (id) => {
    if (expandedId === id) {
      closeExpandedBlog();
    } else {
      if (expandedId !== null) {
        closeExpandedBlog();
        setTimeout(() => setExpandedId(id), 300);
      } else {
        setExpandedId(id);
      }
    }
  };

  // Function to close expanded blog
  const closeExpandedBlog = () => {
    setAnimating(true);
    setTimeout(() => {
      setExpandedId(null);
      setAnimating(false);
      setTransitionDirection(null);
    }, 300);
  };

  // Function to navigate to previous blog
  const handlePrevious = () => {
    const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
    if (currentIndex > 0) {
      setAnimating(true);
      setTransitionDirection('prev');
      setTimeout(() => {
        setExpandedId(blogData[currentIndex - 1].id);
        setAnimating(false);
      }, 300);
    }
  };

  // Function to navigate to next blog
  const handleNext = () => {
    const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
    if (currentIndex < blogData.length - 1) {
      setAnimating(true);
      setTransitionDirection('next');
      setTimeout(() => {
        setExpandedId(blogData[currentIndex + 1].id);
        setAnimating(false);
      }, 300);
    }
  };

  // Scroll to expanded blog when it changes
  useEffect(() => {
    if (expandedRef.current && expandedId !== null && !animating) {
      setTimeout(() => {
        expandedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [expandedId, animating]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (expandedId !== null) {
        if (e.key === 'ArrowLeft') {
          const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
          if (currentIndex > 0) handlePrevious();
        } else if (e.key === 'ArrowRight') {
          const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
          if (currentIndex < blogData.length - 1) handleNext();
        } else if (e.key === 'Escape') {
          closeExpandedBlog();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedId]);

  // Handle swipe navigation on mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (expandedId !== null) {
        const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
        
        // Left swipe (next)
        if (touchStartX - touchEndX > swipeThreshold) {
          if (currentIndex < blogData.length - 1) handleNext();
        }
        
        // Right swipe (previous)
        if (touchEndX - touchStartX > swipeThreshold) {
          if (currentIndex > 0) handlePrevious();
        }
      }
    };
    
    if (expandedId !== null && expandedRef.current) {
      const element = expandedRef.current;
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [expandedId]);

  const expandedBlog = blogData.find((blog) => blog.id === expandedId);
  const currentIndex = blogData.findIndex(blog => blog.id === expandedId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < blogData.length - 1;

  // Progress indicator calculation
  const progress = expandedId ? ((currentIndex + 1) / blogData.length) * 100 : 0;

  return (
   <>
        <div
          className={`bg-gradient-to-br from-[#fff7ed] to-[#fff9f2] px-6 md:px-16 flex items-center bg-amber-95  md:h-20  transition-transform duration-300 gap-3 `}
        >
          <div className=" w-full relative flex flex-col items-center  md:flex-row md:w-[40%] gap-4   ">
            <Link to={'/'}>
            <img
                src="https://res.cloudinary.com/dkdyrgg3q/image/upload/v1741067893/Nifa%20Overseas/ggwlzpvdrfmjeozs28w9.png"
                alt="nifa overseas Logo"
                className="h-32 md:h-40 cursor-pointer bg-amber-30"
              />
            </Link>
        
            <div className=" absolute top-[80%] md:left-10 md:static  flex gap-3 items-center  ">
              <img
                src="/HeaderLogos/MCA.webp"
                alt="MCA-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src="/HeaderLogos/epch-logo-2024.webp"
                alt="EPCH-Logo"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='/HeaderLogos/isoECC.png'
                alt="ECC-ISO"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='/HeaderLogos/Bharat-tex-logo.webp'
                alt="Bharat-tex"
                className="h-5 lg:h-8 cursor-pointer"
              />
              <img
                src='/HeaderLogos/IHGF.webp'
                alt="IHGF"
                className="h-5 lg:h-8 cursor-pointer"
              />
            </div>
          </div>

          {/* <div className=" flex space-x-3 text-lg grow justify-end items-center   ">
            <div className="w-64 h-10 hidden md:flex justify-center items-center text-gray-700 font-semibold rounded-full transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-105 focus:outline-none">
              <button
                className="relative overflow-hidden px-6 py-2 text-lg md:text-sm uppercase rounded-full transition-all duration-300 ease-in-out bg-yellow-300 text-black"
                aria-label="enquire Now"
              >
                <a href="#Catalogue" className="relative z-10">Request Catalogue</a>
              </button>
            </div>
          </div> */}
        </div>
     <div className="bg-gradient-to-br from-orange-50 to-white min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative z-10 px-3 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 mb-4 sm:mb-6 drop-shadow-sm">
              ✨ Nifa Overseas Blog
            </h1>
            <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
              Discover the stories behind our handcrafted treasures, artisan traditions, and sustainable practices. 
              Each blog post offers insights into the world of authentic craftsmanship.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-green-500 mx-auto rounded-full"></div>
            
            {expandedId && (
              <div className="mt-4 sm:mt-8 max-w-xs sm:max-w-lg mx-auto px-2">
                <div className="bg-white rounded-full h-1 sm:h-2 w-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-500" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Blog {currentIndex + 1} of {blogData.length}</p>
              </div>
            )}
          </div>

          {/* Expanded blog section with animation classes based on transition direction */}
          {expandedBlog && (
            <div className={`transition-all duration-300 ${
              animating 
                ? transitionDirection === 'next' 
                  ? 'opacity-0 translate-x-10'
                  : transitionDirection === 'prev'
                  ? 'opacity-0 -translate-x-10'
                  : 'opacity-0 scale-95'
                : 'opacity-100 translate-x-0 scale-100'
              }`}
            >
              <ExpandedBlogCard 
                blog={expandedBlog} 
                refProp={expandedRef} 
                onPrevious={handlePrevious}
                onNext={handleNext}
                hasPrevious={hasPrevious}
                hasNext={hasNext}
                onClose={closeExpandedBlog}
              />
            </div>
          )}

          {/* Blog grid section */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ${expandedId ? 'opacity-30' : 'opacity-100'} transition-opacity duration-500`}>
            {blogData.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => handleCardClick(blog.id)}
              />
            ))}
          </div>

          {/* Add Blog function - for when more blogs are added */}
          {blogData.length === 0 && (
            <div className="text-center py-10 sm:py-20">
              <p className="text-gray-500 text-sm sm:text-base">No blogs available at the moment. Check back soon!</p>
            </div>
          )}
        </div>

        {/* Footer section */}
        <div className="mt-10 sm:mt-20">
          <Footer />
        </div>
      </div>
    </div>
   </>
  
  );
};

export default Blog;
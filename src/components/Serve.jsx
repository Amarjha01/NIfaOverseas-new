import { GoGoal } from "react-icons/go";

const sections = [
  {
    title: "Small & Medium Business Buyers",
    description:
      "We understand that small and medium businesses need flexibility, affordability, and unique products to stand out in the market. That’s why we offer:",
    points: [
      "Low Minimum Order Quantities (MOQs) – Ideal for boutique stores, online retailers, and emerging brands.",
      "Exclusive Handmade Designs – Stand out from mass-produced décor with artisanal, one-of-a-kind pieces.",
      "Fast & Reliable Shipping – Hassle-free global shipping with secure packaging to ensure safe delivery.",
      "Dropshipping & Wholesale Support – Perfect for online sellers and resellers looking to expand their product range.",
    ],
  },
  {
    title: "Wholesalers & Distributors",
    description: "For bulk buyers and large distributors, we provide:",
    points: [
      "Consistent Supply & Large-Scale Production – Meeting wholesale demand without compromising quality.",
      "Custom Branding & Private Labeling – Personalize packaging, logos, and exclusive collections for your brand.",
      "Competitive Wholesale Pricing – Get the best rates on bulk orders with profitable margins.",
      "High-Demand Seasonal & Festive Products – Stock up on fast-selling décor items for peak seasons.",
    ],
  },
  {
    title: "Retailers & E-commerce Sellers",
    description:
      "Retailers and e-commerce businesses thrive on uniqueness and exclusivity, and our handcrafted collections help them achieve exactly that. We support:",
    points: [
      "Brick-and-Mortar Stores – Home décor shops, gift stores, and specialty retailers looking for artisanal collections.",
      "Online Marketplaces – Perfect for Amazon, Etsy, eBay, Shopify, and other e-commerce platforms.",
      "Curated Product Selections – Tailored recommendations based on trends and customer preferences.",
      "Sustainable & Ethical Sourcing – Attract eco-conscious shoppers with fair-trade, handmade goods.",
    ],
  },
  {
    title: "Interior Designers & Home Décor Professionals",
    description:
      "We work closely with interior designers, decorators, and architects looking for bespoke handmade décor to elevate spaces. Our products are ideal for:",
    points: [
      "Rustic, Vintage, and Bohemian Interiors – Create timeless aesthetics with handcrafted metal bells and décor.",
      "Commercial & Residential Projects – Custom solutions for homes, hotels, restaurants, and retail spaces.",
      "Exclusive, Custom Designs – Collaborate with us for tailor-made décor solutions for high-end clients.",
    ],
  },
  {
    title: "Event Planners & Seasonal Buyers",
    description:
      "Our handcrafted metal bells and chimes are perfect for outdoor gardens, patios, and rustic farmhouse settings. We supply:",
    points: [
      "Wind Chimes & Hanging Bells – Ideal for outdoor ambiance, meditation, and relaxation.",
      "Weather-Resistant & Durable Designs – Crafted to withstand outdoor conditions while maintaining charm.",
      "Unique, Artisan-Made Styles – Appealing to customers who appreciate natural, handmade aesthetics.",
    ],
  },
  {
    title: "Corporate & Institutional Buyers",
    description:
      "We work with corporations, educational institutions, and non-profit organizations looking for premium handmade décor and gifting solutions:",
    points: [
      "Ethically Sourced & Handmade Gifts – Unique giveaways for corporate events and special occasions.",
      "Fair-Trade & Sustainable Partnerships – Support ethical production while offering artisanal gifts.",
      "Custom Logo Branding & Bulk Orders – Personalization available for company branding and promotional gifting.",
    ],
  },
  {
    title: "Importers & Global Trade Partners",
    description:
      "We support large-scale importers, fair-trade buyers, and ethical sourcing businesses with:",
    points: [
      "Bulk Supply with Consistent Quality – Ensure reliable stock for international markets.",
      "Customization for Different Markets – Adjust designs, packaging, and materials to meet regional preferences.",
      "End-to-End Export Support – Hassle-free shipping, documentation, and global trade compliance.",
    ],
  },
  {
    title: "Garden & Outdoor Décor Retailers",
    description:
      "Our products are widely used in festive and event décor, especially for Christmas, weddings, and seasonal celebrations. We cater to:",
    points: [
      "Christmas & Holiday Decorators – High-demand jingle bells, rustic accents, and festive hanging ornaments.",
      "Wedding & Event Planners – Unique décor pieces for vintage, boho, and farmhouse-themed weddings.",
      "Corporate & Promotional Gifting – Custom-branded bells for business giveaways and event souvenirs.",
    ],
  },
  {
    title: "Hotels, Restaurants & Hospitality Industry",
    description:
      "We provide handcrafted décor solutions tailored for the hospitality sector:",
    points: [
      "Luxury Handmade Décor for Hotels & Resorts – Enhance your space with unique, artisanal pieces.",
      "Vintage Bells for Cafés & Restaurants – Create a warm, rustic atmosphere with handmade charm.",
      "Eco-Friendly & Sustainable Solutions – Appeal to guests who appreciate ethical and responsible décor.",
    ],
  },
];



const Serve = () => {
  return (
   <>
   
   <div className="py-6 text-center">
      <h2 className="text-3xl lg:text-5xl uppercase">
        <span className="font-bold">Who We Serve –</span> Your Trusted Wholesale Partner
      </h2>
      <p className="text-xl lg:text-3xl px-6">
        At Nifa Overseas, we specialize in supplying handcrafted metal décor to businesses worldwide, catering to diverse industries and order sizes. Whether you're a small boutique, a growing brand, or a large-scale wholesaler, we have the right solutions for you.
      </p>

      {/* Grid for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="lg:text-2xl text-lg font-bold flex justify-center items-center gap-2">
              <GoGoal className="text-amber-600" />
              {section.title}
            </h3>
            <p className="text-lg my-2">{section.description}</p>
            <ul className="text-left list-disc list-inside">
              {section.points.map((point, i) => (
                <li key={i} className="mt-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     
    </div>
     {/* Scrollable Cards for Mobile */}
     <div className="w-full md:hidden flex overflow-x-scroll space-x-4 px-4 py-2 scrollbar-hide">
  {sections.map((section, index) => (
    <div
      key={index}
      className="min-w-96 h-auto bg-gray-100 p-6 rounded-lg shadow-lg "
    >
      <h3 className="text-lg font-bold flex justify-center items-center gap-2">
        <GoGoal className="text-amber-600" />
        {section.title}
      </h3>
      <p className="text-lg my-2">{section.description}</p>
      <ul className="text-left list-disc list-inside">
        {section.points.map((point, i) => (
          <li key={i} className="mt-1">{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

   </>
  );
};

export default Serve;
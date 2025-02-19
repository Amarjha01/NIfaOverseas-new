import React from 'react';

// Image data (you can move this to a separate file like galleryData.js)
const images = [
  'https://plus.unsplash.com/premium_photo-1679809447923-b3250fb2a0ce?w=600&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1679811675652-2302bf23c9f2?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1608793733118-ee3f16002251?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1557687790-902ede7ab58c?w=600&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1679811671226-9181616d7570?w=600&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1679811674659-21be3cc25946?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1589051088132-06f36a22012a?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1620619767323-b95a89183081?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1619280605593-721b24d8914b?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1589395595558-18e333cf6341?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1589051095874-5caef81e6243?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1638192808899-b5e65e1dca97?q=80&w=2075&auto=format&fit=crop',
];

const ImageGallery = () => {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-5/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 py-4 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy" // Lazy loading for performance
            className="w-full h-40 object-cover rounded-lg shadow-lg aspect-[3/2]"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

const images = [
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132033/pyxxjrxfd72rgwytn7as.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132025/gfcvzxoqghtaltovscp1.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132024/r0j40aommth8sj6h4ibx.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132023/kae92swwd1dedawgajk2.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132023/ldzcizpxykzpi2klpxwj.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132022/e1lw3ostvee1efttpr1f.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132022/i8tiuzrxecnr3iv7kh1z.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132021/j3fxgvhqonhm7war5nkz.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132021/b630tkpmwxbwmuqcfdlm.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132021/y16kykgfkreujcjdjiyg.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132020/oserbfqc5mwrrz3oq6n6.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132022/rsmhvaydobjuneqyc56u.jpg',
];

const ImageGallery = () => {
  return (
    <div className="w-full h-auto flex justify-center" id='gallery'>
      <div className="w-8/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 py-4 ">
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
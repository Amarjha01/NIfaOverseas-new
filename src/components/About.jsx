import React from 'react'

const About = () => {
  return (
    <div className='flex mx-auto w-full justify-center  ' id='about'>
       <div className='w-8/10 flex justify-between items-center'>
       <div className='md:w-2/4 w-full  text-xl  '>
          <span className=' font-bold text-4xl '>About Us</span>
          <p className='py-3.5'>At NIFA OVERSEAS, we bring timeless craftsmanship to the world! Since 2020, we’ve been empowering small artisans to create 100% original, antique handicrafts that blend tradition with modern design. Every piece we offer is not just a product—it’s a story of skill, heritage, and sustainability.
          </p>
          <p>Committed to ethical practices, we ensure high-quality, handcrafted treasures that resonate globally. Whether you're a collector, retailer, or someone who loves unique art, we craft with passion, so you can own something truly special! 🌍✨
          </p>
        </div>
        <div className='hidden md:flex 
        h-auto w-2/5 '>
          <img src="https://res.cloudinary.com/dbnticsz8/image/upload/v1738726832/febTech/Nifa/vutjx29bo0yr4lbtnijl.png" className='w-full' alt="" />
        </div>
       </div>
    </div>
  )
}

export default About
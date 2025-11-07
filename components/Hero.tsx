
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dg4wbuppq/image/upload/v1762524949/bhargava-marripati-7LDBKPWAHJ4-unsplash_xnvhry.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold font-sans">
          Mexico's Best Scenic & City eBike Tours
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Discover Mexico's breathtaking landscapes and vibrant cities on two wheels. Unforgettable adventures await!
        </p>
        <div className="mt-8">
          <Button href="#tours" variant="primary">Explore Tours</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

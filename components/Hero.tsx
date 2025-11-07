import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="https://picsum.photos/seed/mexico-city-hero/1920/1080"
        alt="People enjoying an eBike tour in Mexico City"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans drop-shadow-lg mb-4">
          Mexico City's Best Scenic & Historic eBike Tours
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md mb-8">
          Experience the vibrant culture and history of CDMX like never before. Our guided eBike tours are perfect for all skill levels.
        </p>
        <a
          href="#"
          className="bg-brand-secondary text-brand-primary font-bold text-lg py-4 px-10 rounded-full hover:bg-yellow-400 transition-transform duration-300 transform hover:scale-105 inline-block"
        >
          Book Your Adventure Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

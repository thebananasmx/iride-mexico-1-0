
import React, { useState } from 'react';
import Button from './Button';

const slides = [
  {
    title: 'ADVENTURES',
    subtitle: 'Family Rides & Memorable Treasures',
    imageUrl: 'https://res.cloudinary.com/dg4wbuppq/image/upload/v1762524949/bhargava-marripati-7LDBKPWAHJ4-unsplash_xnvhry.jpg',
  },
  {
    title: 'DISCOVER',
    subtitle: 'Historic Routes & Hidden Gems',
    imageUrl: 'https://images.unsplash.com/photo-1591543620767-5846354409f8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'EXPERIENCE',
    subtitle: 'The Heartbeat of the City',
    imageUrl: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop',
  },
];


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row min-h-[60vh]">
        {/* Text Column */}
        <div 
          className="w-full md:w-5/12 flex flex-col justify-center items-start p-8 sm:p-12 lg:p-16 text-brand-dark"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dg4wbuppq/image/upload/v1762538373/topo_map_y8eqj8.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-sans text-brand-accent uppercase tracking-widest">
            {slides[currentIndex].title}
          </h2>
          <p className="mt-4 text-2xl md:text-3xl font-semibold max-w-md">
            {slides[currentIndex].subtitle}
          </p>
          <div className="mt-8">
            <Button href="#tours" variant="secondary" className="!px-10 !py-4">
              Book Guided Tour Now &rarr;
            </Button>
          </div>
        </div>

        {/* Image Carousel Column */}
        <div className="w-full md:w-7/12 relative h-96 md:h-auto">
           <div className="absolute inset-0 overflow-hidden">
             {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.imageUrl}
                  alt={slide.subtitle}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
             ))}
           </div>

          {/* Navigation */}
          <div className="absolute z-10 bottom-6 right-6 flex items-center gap-x-3">
             <button onClick={prevSlide} className="w-14 h-14 rounded-full bg-brand-dark/70 text-white hover:bg-brand-dark transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-secondary">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </button>
             <button onClick={nextSlide} className="w-14 h-14 rounded-full bg-brand-dark/70 text-white hover:bg-brand-dark transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-secondary">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

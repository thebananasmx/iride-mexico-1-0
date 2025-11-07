import React, { useState } from 'react';
import { TOURS, tourCategories } from '../constants';
import { TourCategory } from '../types';
import TourCard from '../components/TourCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'All'>('All');

  const filteredTours = TOURS.filter(tour => 
    selectedCategory === 'All' || tour.category === selectedCategory
  );

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Arrive',
      description: 'Meet us at the starting point 15 minutes early. Your guide and eBike will be ready for you.',
    },
    {
      number: 2,
      title: 'Choose Bike',
      description: 'Get comfortable with your state-of-the-art eBike. We\'ll adjust it perfectly for you.',
    },
    {
      number: 3,
      title: 'Ride',
      description: 'Follow your local guide on an unforgettable adventure, discovering hidden gems and iconic sights.',
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dg4wbuppq/image/upload/v1762524949/bhargava-marripati-7LDBKPWAHJ4-unsplash_xnvhry.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-4">
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

      {/* 2. How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Your adventure is just 3 simple steps away.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksSteps.map(step => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center bg-brand-accent rounded-full text-white text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-sans text-brand-primary">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. Tours Section */}
      <section id="tours" className="py-16 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary text-center">Our Tours</h2>
          <div className="flex justify-center flex-wrap gap-4 my-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 font-bold rounded-full transition-colors ${selectedCategory === 'All' ? 'bg-brand-accent text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              All Tours
            </button>
            {tourCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-bold rounded-full transition-colors ${selectedCategory === category ? 'bg-brand-accent text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sticky CTA */}
      <div className="sticky bottom-0 z-40 p-4 md:hidden bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl-top">
        <Button href="#tours" variant="primary" className="w-full text-center">
          Book Your Tour Now
        </Button>
      </div>
    </>
  );
};

export default HomePage;
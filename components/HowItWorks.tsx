
import React from 'react';
import { Step } from '../types';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const BikeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

const MountainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
);


const HowItWorks: React.FC = () => {

  const steps: Step[] = [
    {
      icon: <CalendarIcon />,
      title: '1. Pick Your Tour',
      description: 'Choose from our exciting tours in Colorado’s most scenic locations. Book online in minutes.',
    },
    {
      icon: <BikeIcon />,
      title: '2. Arrive & Gear Up',
      description: 'Meet your friendly guide at the designated point. We’ll fit you with a top-quality eBike and helmet.',
    },
    {
      icon: <MountainIcon />,
      title: '3. Ride & Explore',
      description: 'Enjoy a fun, safe, and breathtaking guided ride. Create memories that will last a lifetime!',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary">Your Adventure Made Easy</h2>
          <p className="mt-4 text-lg text-gray-600">Getting started is as simple as 1-2-3.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-brand-light rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-sans text-brand-primary mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';
import { Step } from '../types';
import Icon from './Icon';

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: 'calendar',
      title: '1. Pick Your Tour',
      description: 'Choose from our exciting tours in Colorado’s most scenic locations. Book online in minutes.',
    },
    {
      icon: 'bike',
      title: '2. Arrive & Gear Up',
      description: 'Meet your friendly guide at the designated point. We’ll fit you with a top-quality eBike and helmet.',
    },
    {
      icon: 'mountain',
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
                 <Icon name={step.icon} className="h-12 w-12 text-brand-accent" />
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
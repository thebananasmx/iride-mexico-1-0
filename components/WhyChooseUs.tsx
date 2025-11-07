import React from 'react';
import { Feature } from '../types';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);

const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
    </svg>
);

const features: Feature[] = [
  {
    icon: <CheckCircleIcon />,
    title: 'All-Inclusive Pricing',
    description: "Your booking includes a modern eBike, helmet, water, and a professional, friendly guide. No hidden fees!",
  },
  {
    icon: <UsersIcon />,
    title: 'Small Group Sizes',
    description: "We keep our tours small (max 8 riders) to ensure a personalized, safe, and enjoyable experience for everyone.",
  },
  {
    icon: <MapIcon />,
    title: 'Expert Local Guides',
    description: "Our guides are passionate CDMX locals who will share hidden gems and fascinating stories along the way.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-primary">The IRide Mexico Difference</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're dedicated to providing more than just a bike rental. We deliver unforgettable guided adventures with a focus on safety, fun, and local expertise in Mexico City.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-brand-primary font-sans">{feature.title}</dt>
                    <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

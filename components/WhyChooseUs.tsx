import React from 'react';
import { Feature } from '../types';
import Icon from './Icon';

const features: Feature[] = [
  {
    icon: 'check-circle',
    title: 'All-Inclusive Pricing',
    description: "Your booking includes a modern eBike, helmet, water, and a professional, friendly guide. No hidden fees!",
  },
  {
    icon: 'users',
    title: 'Small Group Sizes',
    description: "We keep our tours small (max 8 riders) to ensure a personalized, safe, and enjoyable experience for everyone.",
  },
  {
    icon: 'map',
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary">
                       <Icon name={feature.icon} className="h-8 w-8 text-brand-secondary" />
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
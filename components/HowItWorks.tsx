
import React from 'react';

const HowItWorks: React.FC = () => {
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
  );
};

export default HowItWorks;

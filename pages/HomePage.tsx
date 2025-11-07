
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Tours from '../components/Tours';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadCapture from '../components/LeadCapture';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Tours />
      <Testimonials />
      <WhyChooseUs />
      <LeadCapture />
    </>
  );
};

export default HomePage;
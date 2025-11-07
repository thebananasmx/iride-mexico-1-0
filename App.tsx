
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Tours from './components/Tours';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-body text-brand-dark">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Tours />
        <Testimonials />
        <WhyChooseUs />
        <LeadCapture />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;


import React from 'react';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-body text-brand-dark">
      <Header />
      <main>
        <HomePage />
        <Testimonials />
        <WhyChooseUs />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StyleGuidePage from './pages/StyleGuidePage';

const App: React.FC = () => {
  // Simple router based on the window's pathname
  const path = window.location.pathname;

  let pageContent;

  if (path === '/style-guide') {
    pageContent = <StyleGuidePage />;
  } else {
    // Default to the home page content
    pageContent = (
      <main>
        <HomePage />
        <Testimonials />
        <WhyChooseUs />
        <LeadCapture />
      </main>
    );
  }

  return (
    <div className="bg-brand-light font-body text-brand-dark">
      <Header />
      {pageContent}
      <Footer />
    </div>
  );
};

export default App;
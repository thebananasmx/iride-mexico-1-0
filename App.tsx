
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StyleGuidePage from './pages/StyleGuidePage';
import TourDetailPage from './pages/TourDetailPage';
import ChangelogPage from './pages/ChangelogPage';

const App: React.FC = () => {
  // Simple router based on state and window.location
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    // Listen for custom navigation events triggered by link clicks
    window.addEventListener('navigate', handleLocationChange);
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('navigate', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    // On path change, scroll to top of page, unless it's a hash link.
    // The browser will handle scrolling for hash links.
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [path]);

  let pageContent;

  if (path.startsWith('/tours/')) {
    pageContent = <TourDetailPage />;
  } else if (path === '/style-guide') {
    pageContent = <StyleGuidePage />;
  } else if (path === '/changelog') {
    pageContent = <ChangelogPage />;
  } else {
    // Default to the home page content
    pageContent = <HomePage />;
  }


  return (
    <div className="bg-brand-light font-body text-brand-dark">
      <Header />
      {/* 
        The overflow-x-hidden class is applied here to prevent horizontal scrolling 
        caused by some decorative elements, while allowing the sticky header to function correctly.
        The header needs to be outside any container with an 'overflow' property.
      */}
      <div className="overflow-x-hidden">
        <main>{pageContent}</main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
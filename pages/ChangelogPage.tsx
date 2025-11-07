
import React from 'react';

const ChangelogEntry: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-bold font-sans text-brand-primary mb-4">{title}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {children}
        </ul>
    </div>
);

const ChangelogPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container py-16">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold font-sans text-brand-primary">Changelog</h1>
                    <p className="mt-4 text-lg text-gray-600">A history of all changes and updates to the Ride Mexico website.</p>
                </header>

                <div className="max-w-4xl mx-auto">
                    <article>
                        <h2 className="text-4xl font-bold font-sans text-brand-accent border-b-2 border-gray-200 pb-4 mb-8">
                            Version 1.0 <span className="text-2xl text-gray-500 font-normal">- Initial Launch</span>
                        </h2>

                        <ChangelogEntry title="Core Functionality & Structure">
                            <li><strong>Single Page Application (SPA):</strong> Built with React for a fast, modern user experience.</li>
                            <li><strong>Client-Side Routing:</strong> Custom routing solution to handle page navigation without full reloads.</li>
                            <li><strong>Responsive Design:</strong> Fully mobile-first design, ensuring a seamless experience on all devices.</li>
                            <li><strong>Sticky Header:</strong> Main navigation bar stays fixed at the top for easy access.</li>
                            <li><strong>Sticky Mobile CTA:</strong> A prominent "Book Your Tour" button is always visible on mobile devices to drive conversions.</li>
                            <li><strong>Component-Based Architecture:</strong> The UI is broken down into reusable React components for maintainability.</li>
                        </ChangelogEntry>

                        <ChangelogEntry title="Pages Created">
                           <li><strong>Homepage:</strong> The main landing page featuring a hero carousel, tour listings, testimonials, and lead capture form.</li>
                           <li><strong>Tour Detail Page:</strong> A dynamic page that displays detailed information about a specific tour.</li>
                           <li><strong>Style Guide:</strong> A comprehensive visual reference for all UI elements, including colors, typography, and components.</li>
                           <li><strong>Changelog:</strong> This very page, documenting project versions and updates.</li>
                        </ChangelogEntry>

                        <ChangelogEntry title="Key Components Developed">
                           <li><strong>Header:</strong> Features a sticky navigation bar and a mobile-friendly off-canvas menu.</li>
                           <li><strong>Hero Carousel:</strong> An engaging, full-width image slider on the homepage.</li>
                           <li><strong>Tours Section:</strong> Displays available tours with a category filtering system.</li>
                           <li><strong>Tour Card:</strong> A reusable card component to display summary information for each tour.</li>
                           <li><strong>How It Works:</strong> A simple 3-step visual guide to the booking process.</li>
                           <li><strong>Testimonials:</strong> Showcases customer reviews in a card-based layout to build social proof.</li>
                           <li><strong>Why Choose Us:</strong> Highlights the key value propositions of the company.</li>
                           <li><strong>Lead Capture Form:</strong> An email signup form offering a free guide to generate leads.</li>
                           <li><strong>Footer:</strong> Contains site navigation, contact information, and company details.</li>
                           <li><strong>Button:</strong> A versatile, reusable button component with multiple style variants.</li>
                           <li><strong>Icon:</strong> An SVG icon system for consistent and performant iconography.</li>
                        </ChangelogEntry>

                         <ChangelogEntry title="UI/UX & Design System">
                           <li><strong>Color Palette:</strong> A carefully selected scheme to evoke a sense of adventure and premium quality.</li>
                           <li><strong>Typography:</strong> Utilizes 'Poppins' for headings (modern) and 'Lato' for body text (readable).</li>
                           <li><strong>Styling:</strong> Custom Tailwind CSS configuration for brand consistency across all components.</li>
                        </ChangelogEntry>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default ChangelogPage;

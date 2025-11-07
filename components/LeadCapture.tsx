import React from 'react';

const LeadCapture: React.FC = () => {
  return (
    <section className="bg-brand-light py-20">
      <div className="container">
        <div className="bg-brand-primary rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-sans">
                <span className="block">Get Your Free Taco Guide</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-200">
                Sign up and we'll send you our guide to the "Top 5 Must-Try Taco Spots" on our Mexico City eBike routes!
              </p>
              <form className="mt-8 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white focus:border-white rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-gray-500"
                  >
                    Send The Guide!
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://picsum.photos/seed/tacos-mexico/600/600"
              alt="A person eating tacos at an outdoor market in Mexico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
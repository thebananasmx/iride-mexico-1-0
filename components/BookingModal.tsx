import React, { useEffect } from 'react';
import { Tour } from '../types';

interface BookingModalProps {
  tour: Tour;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose }) => {
  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
      aria-labelledby="booking-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <header className="p-6 border-b border-gray-200">
           <h2 id="booking-modal-title" className="text-2xl font-bold font-sans text-brand-primary">Confirm Your Tour</h2>
           <p className="text-gray-600">You're one step away from your adventure!</p>
           <button
             onClick={onClose}
             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
             aria-label="Close modal"
           >
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </header>

        <div className="p-6 md:p-8">
            <div className="space-y-4">
              <div>
                 <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                 <h3 className="text-xl font-bold font-sans text-brand-dark">{tour.title}</h3>
                 <p className="text-gray-500">{tour.location}</p>
                 <p className="text-2xl font-extrabold font-sans text-brand-accent mt-2">
                    ${tour.price.toFixed(2)} <span className="text-base font-normal text-gray-500">per person</span>
                 </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">Click the button below to proceed to our secure payment page. You can select the number of riders on the next step.</p>
                 <stripe-buy-button
                    buy-button-id="buy_btn_1SYHESI8GHWiLfjaZ430VQoN"
                    publishable-key="pk_test_51SYH7GI8GHWiLfjaZMRA5wJ1GMItapSVdKY1KDMyFE6ZxfPLF6ZawTv4PXheajnVMmvrCKf3Oh2GNrW3X0oSEC5i00abeijiMp"
                  >
                  </stripe-buy-button>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
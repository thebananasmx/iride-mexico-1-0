import React, { useEffect, useState } from 'react';
import { Tour } from '../types';
import Calendar from './Calendar';

interface BookingModalProps {
  tour: Tour;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose }) => {
  // Use a string to store the date in YYYY-MM-DD format for easier handling with input[type=date]
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
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
  
  // Get today's date in YYYY-MM-DD format for the min attribute of the date input
  const getTodayString = () => {
    const today = new Date();
    // Adjust for timezone offset to get the correct local date string
    const offset = today.getTimezoneOffset();
    const todayWithOffset = new Date(today.getTime() - (offset * 60 * 1000));
    return todayWithOffset.toISOString().split('T')[0];
  }

  const handleCalendarDateSelect = (date: Date) => {
    // Convert Date object from Calendar to YYYY-MM-DD string
    const offset = date.getTimezoneOffset();
    const dateWithOffset = new Date(date.getTime() - (offset * 60 * 1000));
    setSelectedDate(dateWithOffset.toISOString().split('T')[0]);
  };

  const getFormattedDate = () => {
    if (!selectedDate) return '';
    // Add T00:00:00 to treat the string as local time and prevent timezone shifting the date
    const date = new Date(selectedDate + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
      aria-labelledby="booking-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Increased max-w for desktop view */}
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <header className="p-6 border-b border-gray-200 flex-shrink-0">
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
        
        {/* Main content area with horizontal layout on desktop */}
        <div className="p-6 md:p-8 overflow-y-auto md:grid md:grid-cols-2 md:gap-x-12">
          {/* Left Column: Tour Info */}
          <div className="space-y-6">
            <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
            <h3 className="text-xl font-bold font-sans text-brand-dark">{tour.title}</h3>
            <p className="text-gray-500">{tour.location}</p>
            <p className="text-2xl font-extrabold font-sans text-brand-accent mt-2">
               ${tour.price.toFixed(2)} <span className="text-base font-normal text-gray-500">per person</span>
            </p>
          </div>

          {/* Right Column: Date Selection & Payment */}
          <div className="mt-8 md:mt-0 flex flex-col">
             <label className="block text-lg font-bold font-sans text-brand-primary mb-2">
               Select an Available Date
             </label>

             {/* Mobile-friendly compact date picker */}
             <div className="md:hidden">
               <input 
                 type="date"
                 value={selectedDate}
                 onChange={(e) => setSelectedDate(e.target.value)}
                 min={getTodayString()}
                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent"
               />
             </div>

             {/* Desktop full calendar view */}
             <div className="hidden md:block">
               <Calendar
                 // Convert string back to Date for the Calendar component
                 selectedDate={selectedDate ? new Date(selectedDate + 'T00:00:00') : null}
                 onDateSelect={handleCalendarDateSelect}
               />
             </div>
             
             <div className="mt-6 text-center flex-grow flex flex-col justify-end">
                {!selectedDate ? (
                   <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md">Please select a date to proceed with your booking.</p>
                 ) : (
                   <>
                     <p className="text-sm text-gray-600 mb-4">
                       You've selected: <strong>{getFormattedDate()}</strong>.
                       <br />
                       Click below to pay. You can select the number of riders on the next step.
                     </p>
                      <stripe-buy-button
                         buy-button-id="buy_btn_1SYHESI8GHWiLfjaZ430VQoN"
                         publishable-key="pk_test_51SYH7GI8GHWiLfjaZMRA5wJ1GMItapSVdKY1KDMyFE6ZxfPLF6ZawTv4PXheajnVMmvrCKf3Oh2GNrW3X0oSEC5i00abeijiMp"
                       >
                       </stripe-buy-button>
                   </>
                 )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

import React, { useState, useEffect } from 'react';
import { Tour } from '../types';
import Button from './Button';
import Calendar from './Calendar';

interface BookingModalProps {
  tour: Tour;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

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
  
  const handleBooking = () => {
    if(!selectedDate) {
        alert("Please select a date for your tour.");
        return;
    }
    // In a real app, this would trigger an API call.
    alert(`Booking confirmed for ${numberOfPeople} person(s) on ${selectedDate.toLocaleDateString()} for the ${tour.title} tour!`);
    onClose();
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
      aria-labelledby="booking-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <header className="p-6 border-b border-gray-200 flex-shrink-0">
           <h2 id="booking-modal-title" className="text-2xl font-bold font-sans text-brand-primary">Book Your Adventure</h2>
           <p className="text-gray-600">Complete the details below to reserve your spot.</p>
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

        <div className="p-6 md:p-8 flex-grow overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Tour Summary & Price */}
            <div className="space-y-6">
              <div>
                 <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover rounded-lg shadow-md mb-4"/>
                 <h3 className="text-xl font-bold font-sans text-brand-dark">{tour.title}</h3>
                 <p className="text-gray-500">{tour.location}</p>
              </div>
              
              <div className="bg-brand-light p-4 rounded-lg border border-gray-200">
                <div className="font-bold text-lg text-brand-primary mb-2">Number of Riders</div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => setNumberOfPeople(p => Math.max(1, p - 1))} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold text-xl hover:bg-gray-300 transition">-</button>
                  <span className="text-2xl font-bold w-12 text-center">{numberOfPeople}</span>
                  <button onClick={() => setNumberOfPeople(p => Math.min(10, p + 1))} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold text-xl hover:bg-gray-300 transition">+</button>
                </div>
              </div>

              <div className="bg-brand-light p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-brand-primary">Total Price</span>
                  <span className="text-3xl font-extrabold font-sans text-brand-accent">
                    ${(tour.price * numberOfPeople).toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 text-right mt-1">(${tour.price} per person)</p>
              </div>
            </div>

            {/* Right Column: Calendar */}
            <div>
               <h3 className="text-lg font-bold text-brand-primary mb-2">Select a Date</h3>
               <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
            </div>
          </div>
        </div>

        <footer className="p-6 bg-gray-50 border-t border-gray-200 flex-shrink-0 flex justify-end">
            <Button variant="outline" onClick={onClose} className="mr-4 !py-2 !px-6 !text-base">Cancel</Button>
            <Button variant="primary" onClick={handleBooking} disabled={!selectedDate} className="!py-2 !px-6 !text-base">
              Confirm Booking
            </Button>
        </footer>
      </div>
    </div>
  );
};

export default BookingModal;

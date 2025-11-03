import React, { useState, useEffect } from 'react';
import type { Service } from '../services/types';
import { SERVICES } from '../services/constants';
import { CalendarIcon, ClockIcon, MapPinIcon } from './icons/icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: Service | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [serviceId, setServiceId] = useState<string>('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
    // Set default date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);

    // Reset submission state when modal re-opens
    setIsSubmitted(false);

  }, [isOpen, selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ serviceId, date, time, address });
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out scale-95 animate-scale-in">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Book a Service</h2>
              <p className="text-gray-500 mt-1">Fill in the details to schedule your service.</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {isSubmitted ? (
             <div className="text-center py-10">
                <svg className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h3>
                <p className="text-gray-600 mt-2">Our team will be in touch shortly. Thank you for choosing CleanConnect!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  id="service"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 transition"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="relative">
                     <CalendarIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"/>
                     <input
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 transition"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <div className="relative">
                     <ClockIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"/>
                    <input
                      type="time"
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 transition"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address / Location</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"/>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g., 123 Main St, Kilimani"
                    className="w-full pl-11 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:border-emerald-500 transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transform hover:scale-105 transition-all duration-300"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
       <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default BookingModal;

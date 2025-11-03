import React, { useState } from 'react';
import type { Service, Testimonial } from './services/types';
import { SERVICES, TESTIMONIALS } from './services/constants';
import BookingModal from './components/BookingModal';

// Header Component
const Header = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-emerald-600">
        CleanConnect
      </h1>
      <a href="#services" className="hidden md:inline-block bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
        Book Now
      </a>
    </div>
  </header>
);

// Hero Component
const Hero = ({ onBookNowClick }: { onBookNowClick: () => void }) => (
  <section className="relative bg-white py-20 md:py-32">
    <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/1600/900?random=10')"}}></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Your Trusted Partner for a <span className="text-emerald-600">Sparkling Clean</span> Home
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Reliable, vetted, and flexible cleaning services at your fingertips. From laundry to deep cleaning, we've got you covered.
      </p>
      <button onClick={onBookNowClick} className="mt-10 bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
        Book a Service Today
      </button>
    </div>
  </section>
);

// Service Card Component
const ServiceCard = ({ service, onBookClick }: { service: Service; onBookClick: (service: Service) => void }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="bg-emerald-100 rounded-full p-5 mb-6">
        <Icon className="w-10 h-10 text-emerald-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
      <button onClick={() => onBookClick(service)} className="w-full bg-emerald-50 text-emerald-700 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-300">
        Book Now
      </button>
    </div>
  );
}

// Services Section
const Services = ({ onBookClick }: { onBookClick: (service: Service) => void }) => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for a pristine living space.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <ServiceCard key={service.id} service={service} onBookClick={onBookClick} />
        ))}
      </div>
    </div>
  </section>
);

// How It Works Section
const HowItWorks = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
                <p className="mt-4 text-lg text-gray-600">Get your home cleaned in three simple steps.</p>
            </div>
            <div className="relative">
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-emerald-200 -translate-y-1/2"></div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="text-center">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">1</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Service</h3>
                        <p className="text-gray-600">Select a service, pick a convenient date and time, and tell us your location.</p>
                    </div>
                     <div className="text-center">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">2</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">We Clean</h3>
                        <p className="text-gray-600">A trusted and vetted professional from CleanConnect arrives to do the job.</p>
                    </div>
                     <div className="text-center">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">3</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Relax & Enjoy</h3>
                        <p className="text-gray-600">Sit back and enjoy your sparkling clean home. Payment is secure and easy.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
    <p className="text-gray-600 flex-grow">"{testimonial.quote}"</p>
    <div className="flex items-center mt-6">
      <img className="w-14 h-14 rounded-full" src={testimonial.avatarUrl} alt={testimonial.name} />
      <div className="ml-4">
        <p className="font-bold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </div>
  </div>
);


// Testimonials Section
const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-600">We are trusted by homeowners and businesses across Kenya.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map(testimonial => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);


// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold text-emerald-400">CleanConnect</h3>
      <p className="mt-4 max-w-md mx-auto">Empowering cleaners, delivering spotless homes. Your convenience is our priority.</p>
      <div className="mt-6 text-sm">
        <p>&copy; {new Date().getFullYear()} CleanConnect. All rights reserved.</p>
        <p className="mt-1">Nairobi, Kenya</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service | null = null) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero onBookNowClick={() => handleOpenModal()} />
        <Services onBookClick={handleOpenModal} />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedService={selectedService} 
      />
    </div>
  );
};

export default App;

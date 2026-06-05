import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Star, MapPin, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappLink = "https://wa.me/918208510630";
  const phoneLink = "tel:+918208510630";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-slate-200">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* Logo representation */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">ZenSmile</span>
            <span className="text-xl md:text-2xl font-light tracking-tight text-slate-500 ml-1">Dental</span>
          </div>
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-8 text-sm font-medium tracking-wider text-gray-600">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Calendar className="w-4 h-4" />
            APPOINTMENTS
          </a>
          <a href={phoneLink} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Phone className="w-4 h-4" />
            CALL 082085 10630
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </header>

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
              alt="Modern Dental Clinic" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-20 text-center px-4 flex flex-col items-center">
            <p className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-4 drop-shadow-md">
              Premier Dentist in Colaba
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tight drop-shadow-lg">
              smile for a<br />lifetime
            </h1>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#526066] hover:bg-[#62737a] text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all shadow-lg"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
            <div className="flex items-center gap-2 font-medium text-gray-800">
              <Star className="w-5 h-5 text-green-600 fill-green-600" />
              <span className="tracking-wide">5.0 Google Rating</span>
            </div>
            <div className="font-semibold text-gray-400">|</div>
            <div className="flex items-center gap-2 font-medium text-gray-800">
              <span className="text-xl font-bold text-blue-600">695+</span>
              <span className="tracking-wide">Happy Patients</span>
            </div>
            <div className="hidden md:block font-semibold text-gray-400">|</div>
            <div className="flex items-center gap-2 font-medium text-gray-800">
               <span className="tracking-wide">Painless Root Canals</span>
            </div>
            <div className="hidden md:block font-semibold text-gray-400">|</div>
            <div className="flex items-center gap-2 font-medium text-gray-800">
               <span className="tracking-wide">Premium Implants</span>
            </div>
          </div>
        </section>

        {/* Central "Tooth" Section */}
        <section className="py-24 px-6 relative overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
              ZenSmile Dental
            </h3>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-8 leading-tight tracking-tight">
              Colaba's Premier Dentistry<br className="hidden md:block" /> Center for Locals and Tourists
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed md:text-lg">
              When you visit ZenSmile, your comfort is our top priority. Our entire team is dedicated to providing you with the personalized, quality dental care that you deserve.
            </p>
          </div>

          <div className="mt-16 flex justify-center relative">
             {/* Decorative Background Element behind the tooth */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 border-[0.5px] border-gray-200 rounded-full z-0"></div>
             
             {/* Abstract Tooth Graphic (using a high quality placeholder representing the pristine white 3D feel) */}
             <div className="relative z-10 drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Pristine Dental Care" 
                 className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-[0_0_40px_rgba(0,0,0,0.05)] border-8 border-white"
                 style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} // subtle organic shape resembling a tooth/premium feel
               />
             </div>
          </div>
        </section>

        {/* Lower Dark Section */}
        <section className="bg-[#7c8884] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column Text */}
              <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                <h3 className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase mb-4">
                  Our Clinic
                </h3>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
                  Creating Beautiful<br />Smiles for the Family
                </h2>
                <p className="text-white/80 leading-relaxed text-lg font-light">
                  We look forward to welcoming you to our clinic. Our office is warm, inviting, and equipped with the latest dental technology. You will always be greeted with a smile and treated with utmost dignity and respect.
                </p>
              </div>
              
              {/* Right Column Image */}
              <div className="lg:w-1/2 min-h-[400px] lg:min-h-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="ZenSmile Clinic Reception" 
                  className="absolute inset-0 w-full h-full object-cover lg:rounded-tl-[100px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 px-6 bg-slate-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-12">
              Patient Experiences
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4 text-[#7c8884]">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "I came from London and got my tooth treatment done at Zen smile... The treatment was done very smoothly, and I'm very happy with the results."
                </p>
                <div className="font-semibold text-gray-900">— Riddhi Gaikwad</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4 text-[#7c8884]">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "Had a great experience... The clinic is clean, well-equipped, and the staff is very professional."
                </p>
                <div className="font-semibold text-gray-900">— 98 Shubham Patel</div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-semibold tracking-tight text-slate-800">ZenSmile</span>
                <span className="text-2xl font-light tracking-tight text-slate-500">Dental</span>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                <p className="text-gray-600 leading-relaxed">
                  Shop no.9, Besides, Jain Temple Pestonji Street,<br />
                  near Nariman House, Apollo Bandar,<br />
                  Colaba, Mumbai 400005
                </p>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <a href={phoneLink} className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors">
                  082085 10630
                </a>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-8 py-4 font-semibold tracking-wide rounded transition-all shadow-md"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="md:w-2/3 h-[400px] bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.9!2d72.82!3d18.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e0c7bad361%3A0xa5b8c86dcc906328!2sDental%20Clinic!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          <div className="border-t border-gray-100 bg-gray-50 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ZenSmile Dental Clinic. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-slate-50 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

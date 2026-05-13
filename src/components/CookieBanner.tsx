import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-brand-orange-light/20 shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="shrink-0 bg-brand-orange-light/10 p-4 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-brand-orange-dark" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-black text-brand-dark mb-2">We respect your privacy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We use cookies to enhance your experience, analyze our traffic, and provide better service. 
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <Link to="/cookie-policy" className="text-brand-orange-dark font-bold hover:underline">
                  Cookie Policy
                </Link>{' '}
                to learn more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-8 py-3 bg-brand-dark text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue transition-all shadow-lg"
              >
                Accept All
              </button>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

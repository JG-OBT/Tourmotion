import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#eb6b21 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Logo.svg" 
                alt="TourMotion Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              5-star mobile motorhome and caravan repair service. We bring professional servicing to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-red transition-colors border border-gray-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-red transition-colors border border-gray-100">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-brand-dark mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-orange-dark mr-3 mt-0.5" />
                <a href="mailto:info@tourmotion.co.uk" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">info@tourmotion.co.uk</a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-orange-dark mr-3 mt-0.5" />
                <a href="tel:07767916568" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">07767916568</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-orange-dark mr-3 mt-0.5" />
                <span className="text-gray-600 text-sm">South Devon, United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-brand-dark mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">Homepage</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-dark transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Website Provider */}
          <div className="flex flex-col items-start md:items-end md:text-right">
            <h3 className="font-bold text-brand-dark mb-6">Website Provided By</h3>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
              <img 
                src="/images/tick.svg" 
                alt="One Big Tick" 
                className="h-8 md:h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Tourmotion LTD All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy-policy" className="hover:text-brand-dark">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-brand-dark">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

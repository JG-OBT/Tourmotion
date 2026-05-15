import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Home, Wrench, Wifi, Battery, Sun, Tv, Wind, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const menuSections = [
    {
      title: 'SERVICE',
      items: [
        { 
          title: 'Full Caravan Service', 
          desc: "Ensure your caravan's peak performance and safety by taking advantage of our comprehensive service package",
          icon: <Search className="w-5 h-5" />,
          id: 'caravan-service'
        },
        { 
          title: 'Habitation Inspection', 
          desc: "Ensure your motorhome operates at its optimum level and remains safe with our meticulous inspection",
          icon: <Search className="w-5 h-5" />,
          id: 'habitation-check'
        },
        { 
          title: 'ALDE Fluid Replacement', 
          desc: "We can supply and change your Alde heating system fluid with the manufactures recommended 5 year fluid",
          icon: <Wrench className="w-5 h-5" />,
          id: 'alde-fluid'
        },
      ]
    },
    {
      title: 'INSTALLATION',
      items: [
        { 
          title: 'Wifi Installation', 
          desc: "Perfect for indulging in Netflix, staying on top of emails, or catching live TV on the go",
          icon: <Wifi className="w-5 h-5" />,
          id: 'wifi-installation'
        },
        { 
          title: 'Refillable Gas Bottles', 
          desc: "Discover the practicality of a Refillable Gas system for your caravan or motorhome at a competitive rate!",
          icon: <Battery className="w-5 h-5" />,
          id: 'gas-bottles'
        },
        { 
          title: 'Solar Panels', 
          desc: "Enhance your caravan or motorhome adventures with our affordably priced, brand-new solar panels!",
          icon: <Sun className="w-5 h-5" />,
          id: 'off-grid'
        },
      ]
    },
    {
      title: 'REPAIR',
      items: [
        { 
          title: 'Entertainment Repair', 
          desc: "Ensure your audio and visual equipment works as expected, from televisions to sound systems",
          icon: <Tv className="w-5 h-5" />,
          id: 'entertainment-repairs'
        },
        { 
          title: 'HVAC Repairs', 
          desc: "Inconsistent temperatures or inefficient operation, addressing these problems is essential",
          icon: <Wind className="w-5 h-5" />,
          id: 'hvac-repairs'
        },
        { 
          title: 'Damp Repairs', 
          desc: "From resealing windows, to repairing the floor. We can ensure your damp issue is a thing of the past",
          icon: <Droplets className="w-5 h-5" />,
          id: 'damp-repairs'
        },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Logo.svg" 
              alt="TourMotion Logo" 
              className="h-24 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-brand-dark font-bold hover:text-brand-red transition-colors text-sm uppercase tracking-wider">Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center text-brand-dark font-bold hover:text-brand-red transition-colors text-sm uppercase tracking-wider"
              >
                Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-64 lg:-left-[450px] pt-4 w-[90vw] max-w-[1000px] z-50"
                  >
                    <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10">
                      {menuSections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-[10px] font-black text-gray-400 tracking-[0.2em] mb-6">{section.title}</h4>
                          <div className="space-y-6">
                            {section.items.map((item) => (
                              <Link 
                                key={item.title} 
                                to={`/services#${item.id}`}
                                className="group flex items-start space-x-3 hover:bg-gray-50 -m-3 p-3 rounded-xl transition-all"
                              >
                                <div className="shrink-0 mt-1 text-brand-orange-dark group-hover:text-brand-red transition-colors">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition-colors leading-tight mb-1">{item.title}</div>
                                  <div className="text-[11px] text-gray-400 leading-relaxed font-medium line-clamp-2">{item.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blog" className="text-brand-dark font-bold hover:text-brand-red transition-colors text-sm uppercase tracking-wider">Blog</Link>
            
            <Link 
              to="/contact" 
              className="bg-orange-gradient text-white px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-orange-200/50"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block px-3 py-4 text-base font-bold text-brand-dark hover:bg-gray-50 border-b border-gray-50">Home</Link>
              <Link to="/services" className="block px-3 py-4 text-base font-bold text-brand-dark hover:bg-gray-50 border-b border-gray-50">Services</Link>
              <Link to="/blog" className="block px-3 py-4 text-base font-bold text-brand-dark hover:bg-gray-50 border-b border-gray-50">Blog</Link>
              <div className="pt-6 px-3">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-orange-gradient text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

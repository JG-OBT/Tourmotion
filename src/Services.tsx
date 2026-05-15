import React from 'react';
import { motion } from 'motion/react';
import { ServiceCard, CTABanner } from './components/Common';
import { SERVICES } from './constants';
import { Link } from 'react-router-dom';
import { Settings, Shield, Home, Wifi, Zap, Flame, Droplets, Laptop, Wind, Battery, Hammer, Thermometer } from 'lucide-react';

const Services = () => {
  const mainServices = SERVICES.slice(0, 4);
  const secondaryServices = SERVICES.slice(4);

  const iconMap: Record<string, React.ReactNode> = {
    'appliance-repair': <Flame />,
    'gas-bottles': <Battery />,
    'alde-fluid': <Thermometer />,
    'damp-reports': <Droplets />,
    'entertainment-repairs': <Laptop />,
    'hvac-repairs': <Wind />,
    'off-grid': <Zap />,
    'damp-repairs': <Hammer />
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-black text-brand-dark mb-8 leading-tight">
                From routine maintenance to <span className="text-brand-orange-dark">emergency call outs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                TourMotion is the only number you need for mobile leisure vehicle servicing in South Devon. Contact us today for a free, no-obligation quote.
              </p>
              <Link to="/contact" className="bg-orange-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:opacity-90 transition-all inline-block">
                Get a Free Quote
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(235,107,33,0.3)] aspect-[4/3] lg:aspect-square"
            >
              <img src="/images/service-hero.jpg" alt="Technician working" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-blue/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="relative group">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {['propex', 'dometic', 'thetford', 'truma', 'alde', 'whale', 'propex', 'dometic', 'thetford', 'truma', 'alde', 'whale'].map((brand, idx) => (
              <div key={`${brand}-${idx}`} className="mx-12 md:mx-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src={`/images/logo-${brand}.png`} 
                  alt={`${brand} logo`} 
                  className={`${brand === 'alde' ? 'h-6 md:h-8' : 'h-8 md:h-12'} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-24 space-y-32">
        {mainServices.map((service, idx) => (
          <div key={service.id} id={service.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-block px-4 py-1 rounded-full bg-brand-orange-dark/10 text-brand-orange-dark font-bold text-sm mb-6">
                  {service.price}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-8">{service.title}</h2>
                <div className="space-y-4 mb-10">
                  {service.fullDescription?.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-600 leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center space-x-2 bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark/90 transition-colors group">
                  <span>Book Now</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-[0_20px_40px_-5px_rgba(235,107,33,0.2)] aspect-video lg:aspect-square ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img src={`/images/service-detail-${service.id}.jpg`} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Full Range of Mobile Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide specialized care for every part of your leisure vehicle, ensuring everything from the HVAC to the entertainment system works perfectly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryServices.map((service) => (
              <div key={service.id} id={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex items-start">
                <div className="shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-50 text-brand-orange-dark flex items-center justify-center group-hover:bg-brand-orange-dark group-hover:text-white transition-all shadow-inner">
                    {React.cloneElement(iconMap[service.id] as React.ReactElement, { size: 32 })}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-orange-dark transition-colors">{service.title}</h3>
                    <span className="text-sm font-bold text-gray-400 ml-4 whitespace-nowrap">{service.price}</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Services;

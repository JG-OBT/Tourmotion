import React from 'react';
import { Link } from 'react-router-dom';

export const CTABanner = () => (
  <section className="bg-orange-gradient py-16 px-4">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Whatever the issue, get in touch</h2>
      <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
        Speak to a specialist today about your motorhome or caravan needs. We provide free expert advice and quotes.
      </p>
      <Link 
        to="/contact" 
        className="inline-block bg-white text-brand-orange-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-2xl"
      >
        Contact Us
      </Link>
    </div>
  </section>
);

interface ServiceCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, price, description }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
    <div className="h-48 bg-gray-100 relative overflow-hidden">
      <img 
        src={`/images/service-detail-${id}.jpg`} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-brand-blue font-bold text-sm shadow-sm ring-1 ring-black/5">
        {price}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange-dark transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      <Link to={`/services#${id}`} className="text-brand-orange-dark font-bold text-sm flex items-center group/btn">
        Learn more 
        <span className="ml-1 transform group-hover/btn:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  </div>
);

import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_DATA = [
  {
    q: "What types of leisure vehicles do you service?",
    a: "We service a wide range of leisure vehicles, including Class A, Class B, and Class C models, as well as campervans and travel trailers. Whether you have a vintage model or a modern unit, our experienced technicians are equipped to handle your repair needs."
  },
  {
    q: "How can I tell if my leisure vehicle needs repairs?",
    a: "Signs that your leisure vehicle may need repairs include unusual noises, warning lights on the dashboard, poor handling, leaks, or appliances not functioning properly. If you notice any of these issues, it's best to have your vehicle inspected by a professional to prevent further damage."
  },
  {
    q: "Do you offer mobile repair services?",
    a: "Yes! We offer mobile repair services for your convenience. If you're experiencing issues while on the road or at a campsite, we can come to you to diagnose and fix the problem, ensuring minimal disruption to your travels."
  },
  {
    q: "How often should I have my leisure vehicle serviced?",
    a: "We recommend having your leisure vehicle serviced at least once a year, or more frequently if you use it often. Regular maintenance checks can help identify potential issues early and keep your vehicle in optimal condition for your adventures."
  },
  {
    q: "What should I do if I have an emergency repair need while traveling?",
    a: "If you find yourself in an emergency situation, contact us immediately. We can provide guidance over the phone and arrange for mobile service if necessary. Always prioritise safety—if the issue poses a danger, pull over to a safe location and wait for assistance."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16 underline decoration-brand-orange-dark decoration-4 underline-offset-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-6 flex justify-between items-center transition-colors hover:bg-gray-50"
            >
              <span className="font-bold text-brand-dark text-lg pr-8">{item.q}</span>
              <ChevronDown className={`text-brand-orange-dark transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

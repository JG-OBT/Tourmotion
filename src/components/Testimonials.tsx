import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Bevan Newton',
    role: 'Motorhome Enthusiast',
    text: 'I did not expect such fast and efficient service but that is what I got. James went out of his way to help when I knocked the rear bumper off our motorhome and broke all the wiring to the lights. His level of knowledge, skill and efficiency was exceptional and can thoroughly recommend TourMotion to anyone needing mobile motorhome or caravan repairs.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    image: 'https://images.unsplash.com/photo-1542281134-2e2308731d77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Peter Robinson',
    role: 'Caravan Owner',
    text: 'While staying in our MH at Beverly holiday park in Paignton we had some trouble with our lights and leisure battery, i rang James at Tourmotion who was very knowledgeable and friendly we arranged a time for James to visit where the electrical fault was diagnosed allowing us to finish our holiday, If you have a problem i would recommend calling James first.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Jane Whittaker',
    role: 'Campervan Owner',
    text: 'James has just fitted a petrol heater in my campervan and was amazing. He listened to what I wanted, talked through the various options, then promptly and efficiently did a great job. He even attended to a couple of minor unrelated issues with the van, along with the way! I cannot recommend him highly enough. Thanks James.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <Quote className="w-16 h-16 text-orange-gradient opacity-10 absolute -top-8 -left-8" />
                <p className="text-xl md:text-2xl font-black text-brand-dark mb-10 leading-relaxed relative z-10">
                  {testimonials[index].text}
                </p>
                
                <div className="flex items-center mb-12">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange-dark shadow-lg">
                      <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-brand-orange-dark rounded-full p-1 border-2 border-white shadow-sm">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-black text-brand-dark">{testimonials[index].name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{testimonials[index].role}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <button 
                    onClick={prev}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:text-brand-orange-dark hover:border-brand-orange-dark transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="flex items-center space-x-12">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > index ? 1 : -1);
                          setIndex(i);
                        }}
                        className={`transition-all duration-300 ${
                          i === index 
                            ? 'w-4 h-4 rounded-full border-4 border-gray-400 bg-transparent' 
                            : 'w-1.5 h-1.5 rounded-full bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={next}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:text-brand-orange-dark hover:border-brand-orange-dark transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                {/* Decorative depth layers like in the image */}
                <div className="absolute top-4 left-4 w-full h-full bg-gray-100 rounded-[2.5rem] -rotate-3 z-0"></div>
                <div className="absolute top-2 left-2 w-full h-full bg-gray-200 rounded-[2.5rem] -rotate-1 z-0"></div>
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(235,107,33,0.3)] aspect-square lg:aspect-video z-10 border-4 border-white">
                  <img 
                    src={testimonials[index].image} 
                    alt="Work service" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="bg-header-gradient border border-gray-200 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-orange-200 transition-all flex items-center space-x-3 w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #eb6b21 0%, #f69435 100%)' }}
            >
              <span>Find more on Google</span>
            </a>
            <a 
              href="#" 
              className="bg-header-gradient border border-gray-200 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-orange-200 transition-all flex items-center space-x-3 w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #eb6b21 0%, #f69435 100%)' }}
            >
              <span>Find more on Trustpilot</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

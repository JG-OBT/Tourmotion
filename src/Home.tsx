import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin, Gauge, ShieldCheck, Heart } from 'lucide-react';
import { ServiceCard, FAQSection, CTABanner } from './components/Common';
import Testimonials from './components/Testimonials';
import { SERVICES, CERTIFICATIONS } from './constants';

const Home = () => {
  const [rotationIndex, setRotationIndex] = React.useState(0);
  const words = ['Servicing', 'Repairs', 'Electrics'];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-10 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
                <span className="flex text-brand-orange-dark">
                  {'★'.repeat(5)}
                </span>
                <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">mobile motorhome and caravan repair service</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark mb-8 leading-[1.1]">
                For all things RV <br />
                <div className="h-[1.2em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={rotationIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="inline-block text-gradient pb-1"
                    >
                      {words[rotationIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                We use high-quality parts, careful attention to detail and offer professional on-site service for caravans, motorhomes and campervans. Wherever you are, TourMotion brings the workshop to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-orange-gradient text-white px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-orange-200 transition-all hover:-translate-y-1">
                  Contact Us
                </Link>
                <Link to="/services" className="border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-brand-dark hover:text-white transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(235,107,33,0.3)]">
                <img 
                  src="/images/hero-home.jpg" 
                  alt="RV Mechanic at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-gradient p-3 rounded-xl shadow-inner">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Visit our new workshop</p>
                    <p className="text-lg font-black text-brand-dark leading-tight mt-1">Unit 2, Devon Business Park</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <p className="text-[10px] font-black uppercase text-brand-orange-dark tracking-[0.2em] text-center">Click below to see our accreditations</p>
        </div>
        
        <div className="relative group">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
              <a 
                key={`${cert.name}-${idx}`} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-12 md:mx-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              >
                {cert.logo ? (
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className={`${cert.name.toLowerCase() === 'alde' ? 'h-5 md:h-6' : 'h-10 md:h-12'} w-auto object-contain`} 
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-black text-gray-300 hover:text-brand-dark transition-colors uppercase tracking-tighter">
                    {cert.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonials />

      {/* Why Use Us Section */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-dark mb-6">Why Use Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are committed to excellence and personalized care. Your safety and comfort on the road are our top priorities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[600px]">
              <img src="/images/why-us.jpg" alt="Awning adjustment" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-12">
              {[
                { 
                  icon: <MapPin className="text-white" />, 
                  title: 'We come to you', 
                  text: 'Whether at home, a campsite, or in a muddy field. Wherever you are in South Devon, we can be there in just a few hours!' 
                },
                { 
                  icon: <ShieldCheck className="text-white" />, 
                  title: 'We only use high-quality parts', 
                  text: 'Quality is important; we want your repair to stand the test of time. That’s why we only source the best available parts, with full manufacturer’s warranty.' 
                },
                { 
                  icon: <Gauge className="text-white" />, 
                  title: 'We are transparent with our pricing', 
                  text: 'Before work starts, when possible, we will provide a full estimate for both parts and labour. At no point will we introduce hidden costs!' 
                },
                { 
                  icon: <Heart className="text-white" />, 
                  title: 'We prioritise your happiness', 
                  text: 'Our customers are sacred to us. We’re extremely proud of our 5-star Google review score. If you’re not satisfied, we’re not done!' 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex group">
                  <div className="shrink-0 mr-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-dark group-hover:bg-brand-red transition-colors flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link to="/contact" className="bg-orange-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-orange-200 transition-all hover:-translate-y-1">
                  Contact Us
                </Link>
                <Link to="/services" className="border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Why Use Us', desc: 'Your second home is important; read about why you should trust us with it.', to: '/#why', image: '/images/link-why.jpg' },
              { title: 'Available Services', desc: 'From general maintenance to solar panel installation, and everything in between.', to: '/services', image: '/images/link-services.jpg' },
              { title: 'Blog', desc: 'Read about some of our repairs and how they can help you.', to: '/blog', image: '/images/link-blog.jpg' },
              { title: 'FAQ', desc: 'Let us answer any question you may have. If we haven’t thought of it, get in touch.', to: '/blog#faq', image: '/images/link-faq.jpg' }
            ].map((card, idx) => (
              <Link to={card.to} key={idx} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="h-44 bg-gray-200 overflow-hidden relative">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange-dark transition-colors">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{card.desc}</p>
                  <div className="mt-4 flex items-center text-brand-orange-dark font-bold text-sm">
                    Go <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Available Services</h2>
              <p className="text-gray-600 max-w-xl">We offer a wide range of professional mobile services for your motorhome or caravan.</p>
            </div>
            <Link to="/services" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-brand-dark/90 transition-colors">
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center">
             <Link to="/services" className="inline-flex items-center space-x-2 text-brand-orange-dark font-bold group">
               <span>And many more</span>
               <span className="transform group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <div id="contact">
        <CTABanner />
      </div>
    </div>
  );
};

export default Home;

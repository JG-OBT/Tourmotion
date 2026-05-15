import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Thank you for your message. We\'ll get back to you as soon as possible!');
        setFormState({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-10 lg:py-16 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#eb6b21 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-brand-orange-dark mb-4">
                <Phone className="w-5 h-5" />
                <span className="font-black uppercase tracking-widest text-xs">Contact Us</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-dark mb-8 leading-[1.1]">
                Need Any help? <br />
                <span className="text-gradient">We're Here For You.</span>
              </h1>
              
              <div className="space-y-8 mt-12">
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-2">Email us directly:</p>
                  <a href="mailto:info@tourmotion.co.uk" className="text-2xl font-black text-brand-dark hover:text-brand-orange-dark transition-colors">info@tourmotion.co.uk</a>
                </div>
                
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-2">Or call us:</p>
                  <a href="tel:07767916568" className="text-2xl font-black text-brand-dark hover:text-brand-orange-dark transition-colors">07767916568</a>
                </div>

                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Opening Hours:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between max-w-xs">
                      <span className="text-gray-600 font-medium">Monday to Friday:</span>
                      <span className="text-brand-dark font-black">08:00-18:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="text-gray-600 font-medium">Saturday:</span>
                      <span className="text-brand-dark font-black">08:00-16:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="text-gray-600 font-medium">Sunday:</span>
                      <span className="text-brand-dark font-black">On-call</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 max-w-md leading-relaxed italic">
                  If you need help outside of these hours, feel free to leave a text or voicemail and we'll get back to you as soon as possible. Your message matters to us, and we'll ensure a swift response.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100"
            >
              <h2 className="text-3xl font-black text-brand-dark mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 px-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-orange-light transition-all outline-none"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 px-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="07767 123 456"
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-orange-light transition-all outline-none"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 px-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-orange-light transition-all outline-none"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 px-1">How can we help?</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your RV needs..."
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-brand-orange-light transition-all outline-none resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-orange-gradient text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-brand-orange-light/40 transition-all flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-[0.98]' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-[32px] overflow-hidden aspect-[16/9] lg:aspect-[21/9] relative shadow-[0_32px_64px_-12px_rgba(235,107,33,0.3)] group">
             {/* Map Placeholder with visual vibe from the image */}
             <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/80 backdrop-blur p-8 rounded-3xl border border-white max-w-md mx-auto shadow-xl">
                    <MapPin className="w-12 h-12 text-brand-orange-dark mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-brand-dark mb-2">Our Workshop</h3>
                    <p className="text-gray-600 font-medium">Unit 2, Devon Business Park, South Devon</p>
                    <div className="mt-6">
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-orange-dark font-black text-xs uppercase tracking-widest hover:underline"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Styling to mimic the image map look */}
             <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20 rounded-[32px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

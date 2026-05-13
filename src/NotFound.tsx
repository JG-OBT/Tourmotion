import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative inline-block"
        >
          <h1 className="text-[12rem] font-black text-gray-50 leading-none select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue tracking-tighter">Page not found</h2>
          </div>
        </motion.div>
        
        <p className="text-gray-500 mt-8 text-lg max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-orange-gradient text-white px-10 py-4 rounded-full font-bold shadow-xl hover:opacity-90 transform hover:-translate-y-1 transition-all"
          >
            <Home size={20} />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from './constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="py-10 lg:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-brand-dark mb-8"
          >
            TourMotion <span className="text-brand-orange-dark">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Read about some of our repairs, and the maintenance tips you can learn from them. Stay updated with the latest in RV care.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(235,107,33,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg ${
                      post.category === 'Repairs' ? 'bg-red-500 text-white' : 
                      post.category === 'Maintenance' ? 'bg-blue-500 text-white' : 
                      'bg-orange-500 text-white'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-6 font-bold uppercase tracking-wider">
                    <span className="flex items-center"><Calendar size={14} className="mr-1.5" /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="flex items-center"><User size={14} className="mr-1.5" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange-dark transition-colors leading-tight">{post.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-brand-orange-dark font-black text-sm group/btn uppercase tracking-widest">
                    Read Full Article <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

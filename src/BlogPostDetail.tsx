import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from './constants';
import { motion } from 'motion/react';
import { ArrowLeft, User, Calendar, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  const otherPosts = BLOG_POSTS.filter(p => p.id !== id).slice(0, 3);

  return (
    <article className="bg-white pb-24">
      {/* Article Header */}
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-brand-orange-dark font-bold text-sm mb-10 hover:translate-x-[-4px] transition-transform group">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
              post.category === 'Repairs' ? 'bg-red-100 text-red-600' : 
              post.category === 'Maintenance' ? 'bg-blue-100 text-blue-600' : 
              'bg-orange-100 text-orange-600'
            }`}>
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-brand-dark mb-8 leading-[1.1]">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-bold">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-orange-dark text-white flex items-center justify-center mr-3 font-black text-xs">JD</div>
              <span>{post.author}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center"><Calendar size={16} className="mr-2" /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 lg:-mt-20 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(235,107,33,0.3)] aspect-video lg:aspect-[21/9]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue max-w-none">
          <div className="bg-orange-50 border-l-4 border-brand-orange-dark p-8 mb-12 rounded-r-2xl italic text-xl text-brand-dark font-medium shadow-sm">
            "{post.summary}"
          </div>

          <div className="space-y-12">
            {post.content.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-2xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-2">{section.heading}</h2>
                )}
                {section.isList ? (
                  <ul className="space-y-4 list-disc pl-6 text-gray-700 leading-relaxed">
                    {section.list?.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {section.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="font-bold text-brand-dark flex items-center"><Share2 size={18} className="mr-2" /> Share this story</span>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all"><Facebook size={18} /></button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all"><Twitter size={18} /></button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all"><LinkIcon size={18} /></button>
          </div>
        </div>
      </div>

      {/* More Posts */}
      <section className="mt-24 bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">More from our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((other) => (
              <Link key={other.id} to={`/blog/${other.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(235,107,33,0.2)] hover:-translate-y-1 transition-all border border-gray-100 flex flex-col h-full">
                <div className="h-40 overflow-hidden">
                  <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-black uppercase text-brand-orange-dark tracking-widest mb-2">{other.category}</span>
                  <h3 className="font-bold text-brand-dark group-hover:text-brand-orange-dark transition-colors line-clamp-2 flex-grow">{other.title}</h3>
                  <div className="mt-4 text-xs font-bold text-gray-400">Read more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPostDetail;

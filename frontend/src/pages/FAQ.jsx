import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageSquare, ChevronDown } from 'lucide-react';
import { faqList } from '../data/events';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqList.filter(
    (item) => item.q.toLowerCase().includes(search.toLowerCase()) || 
              item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            // HELP & SUPPORT
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
            FREQUENTLY ASKED <span className="neon-text">QUESTIONS</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Find immediate answers regarding eligibility, payment verification, hostel accommodation, and competition formats.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="w-5 h-5 text-gray-500 absolute left-4 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. refund, team, accommodation)..."
            className="w-full pl-12 pr-4 py-3 bg-dark-800/90 border border-purple-900/60 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 shadow-lg"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-pink-500/50 bg-dark-850 shadow-[0_0_20px_rgba(255,42,109,0.15)]' : 'border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-200 flex items-center gap-3">
                    <span className="text-pink-500 font-mono text-xs">Q{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-pink-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 glass-card rounded-2xl border border-white/5 text-gray-500">
              <p>No questions match "{search}". Have a specific query?</p>
              <Link to="/contact" className="text-cyan-400 font-semibold hover:underline mt-2 inline-block">
                Contact the Organizing Desk &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Callout */}
        <div className="glass-card p-6 rounded-2xl border border-cyan-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-bold text-sm">Still have questions?</h4>
            <p className="text-xs text-gray-400">Our faculty and student leads are available 24/7 during fest week.</p>
          </div>
          <Link to="/contact" className="btn-primary !py-2 !px-5 text-xs whitespace-nowrap">
            CONTACT ORGANIZERS
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FAQ;

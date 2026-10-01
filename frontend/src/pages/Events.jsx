import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Calendar, MapPin, Users, Trophy, 
  ArrowUpDown, Filter, Sparkles, ExternalLink, ArrowRight 
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { eventCategories } from '../data/events';
import ParticleBackground from '../components/ParticleBackground';

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { allEvents } = useRegistrations();

  const initialCat = searchParams.get('category') || 'ALL';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name' | 'fee-asc' | 'fee-desc' | 'prize'

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    if (cat === 'ALL') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter & Sort
  const filteredEvents = allEvents
    .filter((event) => {
      const matchesCategory =
        activeCategory === 'ALL' || event.category === activeCategory;
      const matchesSearch =
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.coordinator && event.coordinator.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'fee-asc') return (a.fee || 0) - (b.fee || 0);
      if (sortBy === 'fee-desc') return (b.fee || 0) - (a.fee || 0);
      return 0;
    });

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-500 mb-2 block">
            // NATIONAL CHAMPIONSHIP CATALOG
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">
            ALL <span className="neon-text">13 EVENTS</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Choose your battlefield across Coding, Hackathons, Gaming eSports, Cyber Defense, AI, Quizzes, and Creative Arts at Tech Habba 2K26.
          </p>
        </div>

        {/* Search, Filter & Sort Controls */}
        <div className="glass-card p-6 rounded-3xl border border-purple-500/30 mb-10 space-y-6 shadow-[0_0_30px_rgba(121,40,202,0.15)]">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="h-4 w-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by event name, keyword, or coordinator..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 border border-purple-900/50 rounded-xl bg-dark-900 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-pink-500 transition-all"
              />
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <ArrowUpDown className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400 font-mono">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-dark-900 border border-purple-900/50 rounded-xl text-xs text-white focus:outline-none focus:border-pink-500 font-mono"
              >
                <option value="name">Event Name (A-Z)</option>
                <option value="fee-asc">Registration Fee (Low to High)</option>
                <option value="fee-desc">Registration Fee (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-white/5">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(255,42,109,0.5)] border border-pink-400/50'
                    : 'bg-dark-900/80 text-gray-400 hover:text-white hover:bg-dark-800 border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-6 px-1">
          <span>Showing <strong className="text-white">{filteredEvents.length}</strong> Championship Events</span>
          {activeCategory !== 'ALL' && (
            <button
              onClick={() => handleCategorySelect('ALL')}
              className="text-pink-400 hover:underline"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={event.id}
                className="glass-card rounded-2xl overflow-hidden border border-purple-500/20 group hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(255,42,109,0.25)] flex flex-col justify-between transition-all duration-300"
              >
                {/* Poster Image */}
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d18] via-[#0d0d18]/40 to-transparent"></div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-pink-950/90 text-pink-400 border border-pink-500/50 shadow-md">
                        {event.category}
                      </span>
                    </div>

                    {/* Prize Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="font-mono text-cyan-300 font-bold flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        {event.prizePool.split('+')[0]}
                      </span>
                      <span className="font-mono text-white font-bold bg-pink-950/80 px-2 py-0.5 rounded border border-pink-500/40">
                        ₹{event.fee}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold font-cyber text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1.5">
                        {event.name}
                      </h3>
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Meta details */}
                    <div className="space-y-2 text-xs text-gray-300 font-mono pt-2 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>{event.date} • {event.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                        <span className="line-clamp-1">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>Format: {event.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <Link
                    to={`/events/${event.id}`}
                    className="btn-outline !py-2 text-center text-xs font-bold"
                  >
                    VIEW DETAILS
                  </Link>
                  <Link
                    to={`/register?event=${event.id}`}
                    className="btn-primary !py-2 text-center text-xs font-bold"
                  >
                    REGISTER NOW
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-24 glass-card rounded-3xl border border-white/5 text-gray-500">
            <p className="text-base font-semibold">No championship events found matching "{searchQuery}".</p>
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="mt-3 text-xs text-cyan-400 underline font-bold"
            >
              Clear filters and show all 13 events
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Events;

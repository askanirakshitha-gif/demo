import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, User, AlertCircle, Filter, Search, 
  ChevronRight, Sparkles, AlertTriangle, Layers, Tag
} from 'lucide-react';
import { scheduleData, eventCategories } from '../data/events';
import ParticleBackground from '../components/ParticleBackground';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedVenue, setSelectedVenue] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConflictsOnly, setShowConflictsOnly] = useState(false);

  const venues = [
    'ALL',
    'Main Auditorium',
    'Central Innovation Hub',
    'Turing Computer Labs',
    'Pro-Gaming LAN Arena',
    'Cyber Security Operations Center',
    'MBA Seminar Hall',
    'Indoor Sports Pavilion',
    'Campus Wide / Clock Tower'
  ];

  // Aggregate and filter
  const filteredSchedule = scheduleData
    .filter((day) => activeDay === 'ALL' || day.day === activeDay)
    .map((day) => ({
      ...day,
      events: day.events.filter((evt) => {
        const matchesCat = selectedCategory === 'ALL' || evt.category === selectedCategory;
        const matchesVenue = selectedVenue === 'ALL' || evt.venue.toLowerCase().includes(selectedVenue.toLowerCase());
        const matchesSearch = evt.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              evt.coordinator.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesConflict = !showConflictsOnly || evt.conflict;
        return matchesCat && matchesVenue && matchesSearch && matchesConflict;
      })
    }))
    .filter((day) => day.events.length > 0);

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            // MASTER TIMELINE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
            FEST <span className="neon-text">SCHEDULE</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Interactive 3-day timeline of Tech Habba 2K26. Filter tracks by venue, category, and review overlapping event alerts.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          {['ALL', 'DAY 1', 'DAY 2', 'DAY 3'].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-cyber font-bold transition-all ${
                activeDay === day
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(255,42,109,0.5)] border border-pink-400/50 scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {day === 'ALL' ? 'ALL 3 DAYS' : day}
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card p-5 rounded-2xl border border-purple-500/30 mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event or coordinator..."
                className="w-full pl-9 pr-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
              />
            </div>

            {/* Category */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-pink-500"
              >
                <option value="ALL">All Categories</option>
                {eventCategories.filter(c => c !== 'ALL').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Venue */}
            <div>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-pink-500"
              >
                <option value="ALL">All Venues</option>
                {venues.filter(v => v !== 'ALL').map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Overlapping Events Toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white">
              <input
                type="checkbox"
                checked={showConflictsOnly}
                onChange={(e) => setShowConflictsOnly(e.target.checked)}
                className="rounded border-purple-900 bg-dark-900 text-pink-500 focus:ring-pink-500"
              />
              <span className="flex items-center gap-1.5 text-amber-300">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Show Concurrent / Overlapping Time Slot Alerts Only
              </span>
            </label>

            <span className="font-mono text-[11px] text-cyan-400">
              {filteredSchedule.reduce((acc, d) => acc + d.events.length, 0)} Total Timeline Entries
            </span>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-12">
          {filteredSchedule.map((dayGroup) => (
            <div key={dayGroup.day} className="space-y-6">
              
              {/* Day Section Header */}
              <div className="flex items-center gap-4">
                <div className="px-4 py-1.5 rounded-lg bg-pink-950/80 border border-pink-500/40 text-pink-400 font-cyber font-bold text-sm shadow-[0_0_15px_rgba(255,42,109,0.3)]">
                  {dayGroup.day}
                </div>
                <div className="text-xs font-mono text-gray-400">
                  {dayGroup.date}
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/40 via-white/10 to-transparent"></div>
              </div>

              {/* Day Events Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-900/50 space-y-6">
                {dayGroup.events.map((event, idx) => (
                  <div
                    key={`${event.id}-${idx}`}
                    className={`glass-card p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative group ${
                      event.conflict
                        ? 'border-amber-500/40 hover:border-amber-400 bg-dark-850'
                        : 'border-white/5 hover:border-cyan-500/40'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 border-dark-900 ${
                      event.conflict ? 'bg-amber-400 shadow-[0_0_10px_#ffbe0b]' : 'bg-cyan-400 shadow-[0_0_10px_#05d9e8]'
                    }`}></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Left: Info */}
                      <div className="space-y-2 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                            {event.category}
                          </span>
                          {event.conflict && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> Concurrent Slot Alert
                            </span>
                          )}
                        </div>

                        <h3 className="font-cyber font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                          {event.name}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-300 font-mono">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                            <span className="line-clamp-1">{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span className="line-clamp-1">{event.coordinator}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex sm:flex-col gap-2 flex-shrink-0">
                        {event.id && !event.id.startsWith('cultural') && !event.id.startsWith('valedictory') && !event.id.startsWith('hackathon-awards') ? (
                          <>
                            <Link
                              to={`/events/${event.id}`}
                              className="btn-outline !py-1.5 !px-3 text-center text-xs"
                            >
                              Rules
                            </Link>
                            <Link
                              to={`/register?event=${event.id}`}
                              className="btn-primary !py-1.5 !px-3 text-center text-xs"
                            >
                              Register
                            </Link>
                          </>
                        ) : (
                          <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-500/30 text-center">
                            Open to All
                          </span>
                        )}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {filteredSchedule.length === 0 && (
            <div className="text-center py-20 glass-card rounded-2xl border border-white/5 text-gray-500">
              <p className="text-base font-semibold">No schedule tracks match your current filters.</p>
              <button
                onClick={() => { setActiveDay('ALL'); setSelectedCategory('ALL'); setSelectedVenue('ALL'); setSearchQuery(''); setShowConflictsOnly(false); }}
                className="mt-3 text-xs text-cyan-400 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Schedule;

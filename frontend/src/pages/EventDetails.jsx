import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, MapPin, Users, Trophy, Clock, ArrowLeft, Shield, 
  FileText, CheckCircle, AlertTriangle, Phone, Mail, Share2, Sparkles, Download
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import ParticleBackground from '../components/ParticleBackground';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allEvents } = useRegistrations();
  const [event, setEvent] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const found = allEvents.find((e) => e.id === id);
    if (found) {
      setEvent(found);
      window.scrollTo(0, 0);
    }
  }, [id, allEvents]);

  if (!event) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Event Not Found</h2>
        <p className="text-gray-400 mb-6">The requested event could not be found or may have been updated.</p>
        <Link to="/events" className="btn-primary">Browse All Events</Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadRulebook = () => {
    const text = `TECH HABBA 2K26 - OFFICIAL EVENT RULEBOOK
Event: ${event.name}
Category: ${event.category}
Date & Time: ${event.date} (${event.time})
Venue: ${event.venue}
Team Size: ${event.teamSize}
Prize Pool: ${event.prizePool}
Registration Fee: ₹${event.fee}

ABOUT THE EVENT:
${event.description}

ELIGIBILITY:
${event.eligibility}

RULES & REGULATIONS:
${event.rules ? event.rules.map((r, i) => `${i + 1}. ${r}`).join('\n') : 'Standard fest rules apply.'}

WHAT TO BRING:
${event.whatToBring ? event.whatToBring.map((b, i) => `- ${b}`).join('\n') : '- College ID card'}

IMPORTANT INSTRUCTIONS:
${event.instructions ? event.instructions.map((ins, i) => `* ${ins}`).join('\n') : '* Report 15 minutes early'}

COORDINATORS:
${event.coordinator} (${event.contactPhone} | ${event.contactEmail})

Acharya Institute of Technology, Bengaluru
© 2026 TECH HABBA 2K26`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rulebook_${event.name.replace(/[^a-zA-Z0-9]/g, '_')}_TH26.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-6 bg-dark-900/60 px-3 py-1.5 rounded-lg border border-cyan-500/20"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO EVENTS</span>
        </button>

        {/* Hero Header */}
        <div className="glass-card rounded-3xl overflow-hidden border border-purple-500/30 mb-10">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090914] via-[#090914]/60 to-transparent"></div>
            
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/20 text-xs text-gray-200 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
              <span className="px-3 py-1.5 rounded-lg bg-pink-950/90 backdrop-blur-md border border-pink-500/50 text-xs font-mono font-bold text-pink-400">
                {event.category}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-1">
                TECH HABBA 2K26 CHAMPIONSHIP
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-cyber mb-2">
                {event.name}
              </h1>
              {event.tagline && (
                <p className="text-pink-400 text-sm sm:text-base font-medium font-mono">
                  {event.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Key Metric Bar */}
          <div className="bg-[#0e0e1c] px-6 py-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-gray-400 block mb-0.5">PRIZE POOL</span>
              <span className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                {event.prizePool}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">REGISTRATION FEE</span>
              <span className="text-neon-cyan font-bold text-sm sm:text-base">
                ₹{event.fee} <span className="text-xs text-gray-400 font-normal">({event.teamSize})</span>
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">DATE & TIME</span>
              <span className="text-purple-300 font-bold text-sm sm:text-base">
                {event.date}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">VENUE</span>
              <span className="text-pink-400 font-bold text-xs sm:text-sm line-clamp-1">
                {event.venue}
              </span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info (Left 2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About the Event */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5">
              <h3 className="font-cyber font-bold text-xl text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                About The Event
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {/* Eligibility */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5">
              <h3 className="font-cyber font-bold text-xl text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                Eligibility Criteria
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {event.eligibility || 'Open to all undergraduate & postgraduate students from recognised institutions across India.'}
              </p>
            </div>

            {/* Rules & Regulations */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5">
              <h3 className="font-cyber font-bold text-xl text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Rules & Regulations
              </h3>
              <ul className="space-y-3">
                {event.rules ? (
                  event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="text-pink-500 font-mono font-bold text-xs mt-0.5">{idx + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-400">Rules will be briefed by the coordinator prior to contest kickoff.</li>
                )}
              </ul>
            </div>

            {/* What to Bring & Instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h4 className="font-cyber font-bold text-sm text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  What to Bring
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {event.whatToBring ? (
                    event.whatToBring.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li>- College ID Card & Laptops</li>
                  )}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h4 className="font-cyber font-bold text-sm text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Important Instructions
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {event.instructions ? (
                    event.instructions.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li>* Arrive at the venue 15 minutes in advance</li>
                  )}
                </ul>
              </div>

            </div>

          </div>

          {/* Action Sidebar (Right 1 Col) */}
          <div className="space-y-6">
            
            {/* Registration Box */}
            <div className="glass-card p-6 rounded-2xl border border-pink-500/40 space-y-5 bg-gradient-to-b from-[#151528] to-[#0a0a14]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 uppercase font-mono block">Entry Fee</span>
                  <span className="text-3xl font-black text-white font-mono">₹{event.fee}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-green-950/80 text-green-400 border border-green-500/40 text-xs font-mono font-bold">
                  REGISTRATIONS OPEN
                </span>
              </div>

              <div className="space-y-3 pt-2 text-xs text-gray-300 font-mono border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Team Format:</span>
                  <span className="text-white font-bold">{event.teamSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Date:</span>
                  <span className="text-white font-bold">{event.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Time:</span>
                  <span className="text-white font-bold">{event.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Venue:</span>
                  <span className="text-white font-bold text-right line-clamp-1">{event.venue}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  to={`/register?event=${event.id}`}
                  className="btn-primary w-full py-3 text-center text-xs font-bold shadow-[0_0_20px_rgba(217,2,238,0.5)]"
                >
                  REGISTER FOR THIS EVENT
                </Link>

                <button
                  onClick={handleDownloadRulebook}
                  className="btn-outline w-full py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD RULEBOOK</span>
                </button>
              </div>
            </div>

            {/* Coordinator Info */}
            <div className="glass-card p-6 rounded-2xl border border-purple-500/30 space-y-3">
              <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-purple-300">
                EVENT COORDINATOR
              </h4>
              <p className="text-sm font-bold text-white">{event.coordinator}</p>
              
              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono">{event.contactPhone || '+91 98765 43210'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-pink-400" />
                  <span className="font-mono">{event.contactEmail || 'events@techhabba2k26.in'}</span>
                </div>
              </div>
            </div>

            {/* Need Accommodation Note */}
            <div className="p-5 rounded-2xl bg-dark-900/90 border border-white/5 space-y-2 text-xs">
              <h5 className="font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Need Accommodation?
              </h5>
              <p className="text-gray-400 leading-relaxed">
                Traveling from outside Bengaluru? Book secure campus hostel accommodation at ₹450/day.
              </p>
              <Link to="/accommodation" className="text-cyan-400 hover:underline font-semibold block pt-1">
                Book Accommodation &rarr;
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EventDetails;

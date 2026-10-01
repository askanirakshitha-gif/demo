import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Send, CheckCircle2, 
  ExternalLink, User, MessageSquare, Sparkles 
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-500 mb-2 block">
            // FEST CONTROL ROOM
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
            CONTACT <span className="neon-text">TECH HABBA 2K26</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Reach out to our executive faculty conveners, domain heads, and student coordinators for inquiries, sponsorships, or urgent support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Directory & Venue (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Faculty Coordinators */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/30">
              <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 block mb-1">
                FACULTY CONVENERS
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Dr. Rajagopal K. & Prof. Ananya Sharma</h3>
              <p className="text-xs text-gray-400 mb-3">Department of Computer Science & Engineering, AIT</p>
              <div className="space-y-1.5 text-xs text-gray-300 font-mono">
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 98765 43210 / 080-23722222</div>
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-pink-400" /> convener@techhabba2k26.in</div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="glass-card p-6 rounded-2xl border border-pink-500/30">
              <span className="text-[10px] font-mono font-bold uppercase text-pink-400 block mb-3">
                STUDENT EXECUTIVE LEADS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
                  <h4 className="font-bold text-white">Aryan Sharma</h4>
                  <span className="text-[10px] text-pink-400 uppercase font-mono block">Fest President</span>
                  <span className="text-gray-400 font-mono text-[11px]">+91 98765 12345</span>
                </div>

                <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
                  <h4 className="font-bold text-white">Pooja Hegde</h4>
                  <span className="text-[10px] text-pink-400 uppercase font-mono block">Vice President</span>
                  <span className="text-gray-400 font-mono text-[11px]">+91 98765 12346</span>
                </div>

                <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
                  <h4 className="font-bold text-white">Karthik Rao</h4>
                  <span className="text-[10px] text-cyan-400 uppercase font-mono block">Technical Head</span>
                  <span className="text-gray-400 font-mono text-[11px]">+91 98765 12347</span>
                </div>

                <div className="p-3 rounded-xl bg-dark-900/80 border border-white/5">
                  <h4 className="font-bold text-white">Deepak S</h4>
                  <span className="text-[10px] text-cyan-400 uppercase font-mono block">Hospitality Lead</span>
                  <span className="text-gray-400 font-mono text-[11px]">+91 98765 12348</span>
                </div>
              </div>
            </div>

            {/* Address & Google Maps */}
            <div className="glass-card p-6 rounded-2xl border border-purple-500/30 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-300 block">
                CAMPUS ADDRESS & LOCATION
              </span>
              
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Acharya Institute of Technology, Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, Karnataka 560107</span>
              </div>

              {/* Map embed / preview */}
              <div className="w-full h-44 rounded-xl bg-dark-900 border border-purple-900/50 relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(#05d9e8_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                <MapPin className="w-8 h-8 text-pink-500 animate-bounce relative z-10" />
                <span className="text-xs font-cyber font-bold text-white relative z-10 mt-1">
                  ACHARYA INSTITUTE OF TECHNOLOGY
                </span>
                <span className="text-[10px] text-gray-400 font-mono relative z-10">
                  120-Acre Wi-Fi Enabled Futuristic Campus
                </span>
                <a
                  href="https://maps.google.com/?q=Acharya+Institute+of+Technology+Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline font-bold relative z-10"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30 space-y-6">
              <div>
                <h3 className="font-cyber font-bold text-xl text-white mb-1">Send a Message</h3>
                <p className="text-xs text-gray-400">Our support team replies within 2 hours during active fest registrations.</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-950/40 border border-green-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                  <h4 className="font-bold text-white text-lg font-cyber">Message Dispatched!</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Thank you for contacting us. A confirmation email and SMS has been logged with our coordinator team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you need help with..."
                      className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-3.5 text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,2,238,0.5)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE NOW</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;

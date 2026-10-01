import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#000000] border-t border-white/15 pt-16 pb-10 overflow-hidden">
      {/* Top White Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_#ffffff]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center bg-black shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <div className="w-4 h-4 rounded-full border border-white/60 font-cyber font-black text-white text-[9px] flex items-center justify-center">
                  O
                </div>
              </div>
              <span className="font-cyber font-black tracking-wider text-2xl text-white">
                TECH <span className="neon-text">HABBA</span> <span className="text-black text-xs px-1.5 py-0.5 rounded bg-white font-bold font-sans">2K26</span>
              </span>
            </Link>
            
            <p className="text-sm text-zinc-300 font-mono tracking-wide">
              "Where Technology Meets Talent"
            </p>
            
            <p className="text-zinc-400 text-sm leading-relaxed pr-4">
              An inter-collegiate technical fest celebrating innovation, coding, creativity, competition and technology at Acharya Institute of Technology, Bengaluru.
            </p>

            {/* Social icons */}
            <div className="pt-2 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-cyber text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">About Fest</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events Gallery</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Schedule & Timeline</Link></li>
              <li><Link to="/accommodation" className="hover:text-white transition-colors">Accommodation</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ Hub</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Organizers</Link></li>
            </ul>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-white font-cyber text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Event Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/events" className="hover:text-white transition-colors">All 13 Events</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Event Registration</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">My Registrations</Link></li>
              <li><Link to="/events/the-big-hack" className="hover:text-white transition-colors">The Big Hack (Hackathon)</Link></li>
              <li><Link to="/events/ai-agents-workshop" className="hover:text-white transition-colors">AI Agents Masterclass</Link></li>
              <li><Link to="/events/valorant-clash" className="hover:text-white transition-colors">Valorant eSports</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Campus Location */}
          <div className="space-y-3">
            <h4 className="text-white font-cyber text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Venue
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-zinc-300">
              <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <span>Acharya Institute of Technology, Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, KA 560107</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-white flex-shrink-0" />
              <span>+91 98765 43210 / 080-23722222</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-zinc-300">
              <Mail className="w-3.5 h-3.5 text-white flex-shrink-0" />
              <span>support@techhabba2k26.in</span>
            </div>
            
            <div className="pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-200 border border-white/20">
                <ShieldCheck className="w-3 h-3 text-white" /> Secure Payment Gateway Enabled
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <p>© 2026 TECH HABBA 2K26. All Rights Reserved. Acharya Institute of Technology.</p>
          <div className="flex items-center space-x-6 text-zinc-400">
            <Link to="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Help Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

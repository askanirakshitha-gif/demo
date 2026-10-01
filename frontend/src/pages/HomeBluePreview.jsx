import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, Calendar, MapPin, Users, Cpu, Trophy, Zap, Code, Shield, 
  Sparkles, Award, ArrowRight, CheckCircle2, HelpCircle, Send, ExternalLink, 
  Terminal, Flame, Rocket, Star, Clock, Layers, Phone, Mail, Eye
} from 'lucide-react';
import { eventsData, eventCategories, faqList, scheduleData } from '../data/events';
import ParticleBackgroundBlue from '../components/ParticleBackgroundBlue';
import FloatingLogo from '../components/FloatingLogo';
import Hero3DTitleBlue from '../components/Hero3DTitleBlue';
import AcharyaLogo from '../components/AcharyaLogo';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 14, minutes: 22, seconds: 10 });

  useEffect(() => {
    // 12 November 2026
    const targetDate = new Date('2026-11-12T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto my-8">
      {[
        { label: 'DAYS', val: timeLeft.days },
        { label: 'HOURS', val: timeLeft.hours },
        { label: 'MINUTES', val: timeLeft.minutes },
        { label: 'SECONDS', val: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center bg-[#0D1630]/80 backdrop-blur-xl border border-blue-500/25 shadow-[0_8px_32px_rgba(5,11,24,0.8),0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] transition-all"
        >
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/15 rounded-full blur-sm group-hover:scale-150 transition-transform"></div>
          <span className="text-2xl sm:text-4xl md:text-5xl font-black font-cyber text-white drop-shadow-[0_2px_10px_rgba(96,165,250,0.4)]">
            {item.val.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#B8C7DC] mt-1 uppercase font-semibold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const HomeBluePreview = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });

  const featuredEvents = eventsData.filter(e => e.featured).slice(0, 4);
  const previewEvents = activeTab === 'ALL' 
    ? eventsData.slice(0, 6) 
    : eventsData.filter(e => e.category === activeTab).slice(0, 6);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#050B18] text-[#E5E7EB] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <ParticleBackgroundBlue />

      {/* Floating Theme Switcher Banner for side-by-side review */}
      <div className="fixed top-20 right-4 sm:right-8 z-50 flex items-center gap-2 bg-[#0D1630]/95 border-2 border-blue-400/80 rounded-full px-4 py-2 shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
        <span className="text-xs font-mono font-bold text-white tracking-wide">
          PREVIEW: DEEP NAVY &amp; BLUE 3D
        </span>
        <span className="text-zinc-500">|</span>
        <Link
          to="/"
          className="text-xs font-mono font-semibold text-blue-300 hover:text-white underline flex items-center gap-1 transition-colors"
        >
          View Black Theme
        </Link>
      </div>

      {/* ==================================================
          1. HERO SECTION (Deep Navy & Electric Blue 3D Atmosphere)
          ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Ambient Electric Blue Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-500/[0.12] rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/[0.08] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* 3D Floating Acharya Emblem & Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            {/* Counter-Reactive 3D Acharya Logo (Reacts & moves in opposite way as Big-O pops up/back) */}
            <AcharyaLogo size={80} />

            {/* Futuristic Navy & Blue Status Badge */}
            <div className="inline-flex max-w-full items-stretch border border-blue-500/30 border-l-2 border-l-blue-400 bg-[#0D1630]/90 text-[11px] sm:text-xs font-bold tracking-[0.16em] text-white shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] rounded-[6px] overflow-hidden backdrop-blur-md">
              <span className="flex items-center border-r border-blue-500/30 bg-blue-500/20 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-[1px] bg-blue-400 animate-pulse shadow-[0_0_8px_#60A5FA]" />
              </span>
              <span className="px-3 py-1.5 font-mono uppercase text-[#E5E7EB]">
                Acharya Institute of Technology // 12 - 14 NOV 2026
              </span>
            </div>
          </motion.div>

          {/* 3D Extruded Chrome/Silver Title with Electric Blue Rim Lighting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Hero3DTitleBlue line1="TECH HABBA" line2="2026" className="mb-4" />
          </motion.div>

          {/* Statement & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <div className="font-mono text-sm sm:text-lg md:text-xl tracking-[0.22em] uppercase text-[#B8C7DC] select-none">
              <span className="text-blue-400/60">// </span>
              <span className="text-white font-bold drop-shadow-[0_0_12px_rgba(96,165,250,0.3)]">WHERE TECHNOLOGY MEETS TALENT</span>
              <span className="text-blue-400/60"> //</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#B8C7DC] font-mono text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            An inter-collegiate national technical fest celebrating innovation, coding, creativity, competition and technology. Accelerate your skills across 13 championship tracks.
          </motion.p>

          {/* Electric Blue & Chrome Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link 
              to="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-[0_4px_25px_rgba(59,130,246,0.5),0_0_15px_rgba(96,165,250,0.3)] hover:shadow-[0_6px_35px_rgba(59,130,246,0.7)] hover:scale-105 active:scale-95 transition-all text-sm tracking-wide border border-blue-400/40"
            >
              EXPLORE ALL 13 EVENTS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-[#0D1630]/85 border border-blue-500/40 shadow-[0_4px_20px_rgba(5,11,24,0.6)] hover:border-blue-400 hover:bg-blue-900/30 hover:scale-105 active:scale-95 transition-all text-sm tracking-wide backdrop-blur-md"
            >
              REGISTER NOW
            </Link>
          </motion.div>

          {/* Countdown Clock */}
          <Countdown />

        </div>
      </section>

      {/* ==================================================
          2. METRIC STATS TICKER
          ================================================== */}
      <section className="py-12 border-y border-blue-500/20 bg-[#0D1630]/60 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '13+', label: 'Technical & Creative Events' },
              { val: '₹1.5L+', label: 'Total Cash Prize Pool' },
              { val: '500+', label: 'Expected College Teams' },
              { val: '3 Days', label: '12 – 14 November 2026' }
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="font-cyber font-black text-3xl sm:text-5xl text-white drop-shadow-[0_2px_12px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                    {stat.val}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[#B8C7DC] mt-2 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          3. ABOUT TECH HABBA SECTION (With Pop-Up Event Boxes & Shining Borders)
          ================================================== */}
      <section id="about" className="py-24 relative z-10 border-t border-blue-500/20 bg-[#050B18]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              // DISCOVER THE LEGACY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 font-cyber">
              ABOUT <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">TECH HABBA 2K26</span>
            </h2>
            <p className="text-[#B8C7DC] text-base sm:text-lg leading-relaxed">
              "Tech Habba 2K26 is a technical celebration that brings together students from different colleges to compete, collaborate, innovate and showcase their technical and creative skills."
            </p>
          </div>

          {/* 5 Core Feature Cards (Interactive Pop-Up & Electric Blue Border Shining Links) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1: Technology */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop p-6 rounded-2xl border border-blue-500/25 border-t-2 border-t-blue-400 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-[#0D1630]/85 hover:bg-[#0D1630]/95 hover:border-blue-400 hover:shadow-[0_24px_50px_-10px_rgba(5,11,24,0.95),0_0_35px_rgba(59,130,246,0.3)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=TECHNICAL" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-blue-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-blue-200 tracking-wide">
                    TECHNOLOGY
                  </h3>
                  <p className="text-xs text-[#B8C7DC] leading-relaxed group-hover:text-white transition-colors">
                    Deep-dive into Agentic AI, Cyber Defense, Decentralized Protocols, and Next-Gen Architectures.
                  </p>
                </div>

                {/* Electric Blue Border-Shining Link Pill */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#60A5FA_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-[#050B18]/90 border border-blue-500/30 group-hover:border-blue-400 group-active:border-blue-300 text-[11px] font-mono font-bold tracking-wider text-[#B8C7DC] group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 group-active:bg-blue-300 transition-colors animate-pulse" />
                      01 // TECH
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      <span className="text-[10px] tracking-widest">EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2: Innovation */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop p-6 rounded-2xl border border-blue-500/25 border-t-2 border-t-blue-400 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-[#0D1630]/85 hover:bg-[#0D1630]/95 hover:border-blue-400 hover:shadow-[0_24px_50px_-10px_rgba(5,11,24,0.95),0_0_35px_rgba(59,130,246,0.3)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=HACKATHON" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-blue-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-blue-200 tracking-wide">
                    INNOVATION
                  </h3>
                  <p className="text-xs text-[#B8C7DC] leading-relaxed group-hover:text-white transition-colors">
                    Transform revolutionary concepts into deployable 24-hour prototypes and startup pitches.
                  </p>
                </div>

                {/* Electric Blue Border-Shining Link Pill */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#60A5FA_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-[#050B18]/90 border border-blue-500/30 group-hover:border-blue-400 group-active:border-blue-300 text-[11px] font-mono font-bold tracking-wider text-[#B8C7DC] group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 group-active:bg-blue-300 transition-colors animate-pulse" />
                      02 // INNV
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      <span className="text-[10px] tracking-widest">EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Competition */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop p-6 rounded-2xl border border-blue-500/25 border-t-2 border-t-blue-400 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-[#0D1630]/85 hover:bg-[#0D1630]/95 hover:border-blue-400 hover:shadow-[0_24px_50px_-10px_rgba(5,11,24,0.95),0_0_35px_rgba(59,130,246,0.3)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=CODING" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-blue-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-blue-200 tracking-wide">
                    COMPETITION
                  </h3>
                  <p className="text-xs text-[#B8C7DC] leading-relaxed group-hover:text-white transition-colors">
                    Clash against 500+ top colleges across algorithmic CP, CTF hacking, and Valorant LAN battles.
                  </p>
                </div>

                {/* Electric Blue Border-Shining Link Pill */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#60A5FA_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-[#050B18]/90 border border-blue-500/30 group-hover:border-blue-400 group-active:border-blue-300 text-[11px] font-mono font-bold tracking-wider text-[#B8C7DC] group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 group-active:bg-blue-300 transition-colors animate-pulse" />
                      03 // COMP
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      <span className="text-[10px] tracking-widest">EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 4: Creativity */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop p-6 rounded-2xl border border-blue-500/25 border-t-2 border-t-blue-400 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-[#0D1630]/85 hover:bg-[#0D1630]/95 hover:border-blue-400 hover:shadow-[0_24px_50px_-10px_rgba(5,11,24,0.95),0_0_35px_rgba(59,130,246,0.3)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=CREATIVE" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-blue-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-blue-200 tracking-wide">
                    CREATIVITY
                  </h3>
                  <p className="text-xs text-[#B8C7DC] leading-relaxed group-hover:text-white transition-colors">
                    Design cyberpunk UI identities, debate future tech ethics, and conquer cryptic campus quests.
                  </p>
                </div>

                {/* Electric Blue Border-Shining Link Pill */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#60A5FA_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-[#050B18]/90 border border-blue-500/30 group-hover:border-blue-400 group-active:border-blue-300 text-[11px] font-mono font-bold tracking-wider text-[#B8C7DC] group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 group-active:bg-blue-300 transition-colors animate-pulse" />
                      04 // CREA
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      <span className="text-[10px] tracking-widest">EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 5: Collaboration */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop p-6 rounded-2xl border border-blue-500/25 border-t-2 border-t-blue-400 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-[#0D1630]/85 hover:bg-[#0D1630]/95 hover:border-blue-400 hover:shadow-[0_24px_50px_-10px_rgba(5,11,24,0.95),0_0_35px_rgba(59,130,246,0.3)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=FUN%20%2F%20MANAGEMENT" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-blue-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-blue-200 tracking-wide">
                    COLLABORATION
                  </h3>
                  <p className="text-xs text-[#B8C7DC] leading-relaxed group-hover:text-white transition-colors">
                    Form inter-college squads, network with venture capital leaders, and build lifelong bonds.
                  </p>
                </div>

                {/* Electric Blue Border-Shining Link Pill */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#60A5FA_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-[#050B18]/90 border border-blue-500/30 group-hover:border-blue-400 group-active:border-blue-300 text-[11px] font-mono font-bold tracking-wider text-[#B8C7DC] group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-300 group-active:bg-blue-300 transition-colors animate-pulse" />
                      05 // COLL
                    </span>
                    <span className="flex items-center gap-1 text-blue-300 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
                      <span className="text-[10px] tracking-widest">EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ==================================================
          4. FEATURED EVENTS SECTION
          ================================================== */}
      <section className="py-20 relative z-10 bg-[#0D1630]/75 backdrop-blur-md border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              // HIGH STAKES ARENA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              FEATURED <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">FLAGSHIPS</span>
            </h2>
            <p className="text-[#B8C7DC] text-sm">
              The grandest challenges offering massive prize pools, industry recognition, and maximum prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="event-box-pop rounded-2xl overflow-hidden border border-blue-500/25 flex flex-col group hover:border-blue-400 hover:shadow-[0_20px_45px_-10px_rgba(5,11,24,0.95),0_0_30px_rgba(59,130,246,0.3)] bg-[#0D1630]/90 transition-all duration-300"
              >
                {/* Poster */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 contrast-125 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1630] via-[#0D1630]/40 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#050B18]/90 text-blue-300 border border-blue-400/40 shadow-sm">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-mono text-white font-bold flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-blue-400" />
                      {event.prizePool.split('+')[0]}
                    </span>
                    <span className="text-[11px] text-blue-200 font-mono bg-[#050B18]/80 px-2 py-0.5 rounded border border-blue-400/20">
                      Fee: ₹{event.fee}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-cyber font-bold text-base text-white group-hover:text-blue-200 transition-colors line-clamp-1 mb-2">
                      {event.name}
                    </h3>
                    <p className="text-[#B8C7DC] text-xs line-clamp-2 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-1.5 text-xs text-blue-100 mb-5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{event.date} • {event.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-blue-400" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-500/20">
                    <Link
                      to={`/events/${event.id}`}
                      className="py-2 px-2 text-center text-xs font-semibold rounded-lg bg-[#050B18]/90 border border-blue-500/30 text-[#E5E7EB] hover:border-blue-400 hover:text-white transition-all"
                    >
                      DETAILS
                    </Link>
                    <Link
                      to={`/register?event=${event.id}`}
                      className="py-2 px-2 text-center text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_2px_15px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_20px_rgba(96,165,250,0.6)] hover:scale-105 transition-all"
                    >
                      REGISTER
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. ALL EVENTS PREVIEW & CATEGORY TABS
          ================================================== */}
      <section className="py-20 relative z-10 border-t border-blue-500/20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                // FULL BATTLEFIELD
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-cyber">
                ALL <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">13 EVENTS</span>
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 mt-4 md:mt-0 no-scrollbar">
              {eventCategories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all whitespace-nowrap ${
                    activeTab === cat
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-400/50'
                      : 'bg-[#0D1630]/80 text-[#B8C7DC] border border-blue-500/20 hover:border-blue-400/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="event-box-pop rounded-2xl p-6 bg-[#0D1630]/85 border border-blue-500/25 hover:border-blue-400/80 hover:shadow-[0_20px_45px_-10px_rgba(5,11,24,0.95),0_0_30px_rgba(59,130,246,0.25)] flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#050B18] text-blue-300 border border-blue-400/30">
                      {event.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-white flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-blue-400" />
                      {event.prizePool.split('+')[0]}
                    </span>
                  </div>

                  <h3 className="font-cyber font-bold text-lg text-white mb-2 line-clamp-1">
                    {event.name}
                  </h3>
                  <p className="text-xs text-[#B8C7DC] line-clamp-2 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-blue-200/90 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{event.date} • {event.time.split(' - ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span className="line-clamp-1">{event.venue.split('(')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-blue-500/20">
                  <span className="text-xs font-mono font-bold text-white">
                    ₹{event.fee} <span className="text-[10px] text-[#B8C7DC] font-normal">/ {event.teamSize}</span>
                  </span>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                  >
                    VIEW EVENT <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-[0_4px_25px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_35px_rgba(59,130,246,0.7)] hover:scale-105 transition-all text-sm tracking-wide border border-blue-400/40"
            >
              BROWSE ALL 13 EVENT TRACKS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================
          6. SCHEDULE TIMELINE PREVIEW
          ================================================== */}
      <section className="py-20 relative z-10 border-t border-blue-500/20 bg-[#0D1630]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              // FEST ITINERARY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              EVENT <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">SCHEDULE</span>
            </h2>
            <p className="text-[#B8C7DC] text-sm">
              3 action-packed days of intense competitions, keynotes, and cultural showcases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scheduleData.map((dayItem) => (
              <div
                key={dayItem.day}
                className="p-6 rounded-2xl bg-[#050B18]/85 border border-blue-500/25 flex flex-col justify-between shadow-[0_8px_32px_rgba(5,11,24,0.6)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-4">
                    <div>
                      <span className="font-cyber font-black text-lg text-white block">
                        {dayItem.day}
                      </span>
                      <span className="text-xs font-mono text-blue-400">
                        {dayItem.date}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0D1630] text-blue-300 border border-blue-400/30">
                      {dayItem.events.length} SESSIONS
                    </span>
                  </div>

                  <div className="space-y-3">
                    {dayItem.events.slice(0, 4).map((evt) => (
                      <div key={evt.id} className="p-3 rounded-xl bg-[#0D1630]/60 border border-blue-500/15">
                        <div className="flex items-center justify-between text-[11px] font-mono text-blue-300 mb-1">
                          <span>{evt.time.split(' - ')[0]}</span>
                          <span className="text-[10px] text-[#B8C7DC]">{evt.category}</span>
                        </div>
                        <h4 className="font-bold text-sm text-white line-clamp-1">
                          {evt.name}
                        </h4>
                        <div className="text-[11px] text-[#B8C7DC] mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          <span className="line-clamp-1">{evt.venue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-blue-500/20 text-center">
                  <Link
                    to="/schedule"
                    className="text-xs font-mono font-bold text-blue-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    VIEW FULL DAY TIMELINE <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. FREQUENTLY ASKED QUESTIONS
          ================================================== */}
      <section className="py-20 relative z-10 border-t border-blue-500/20 bg-[#050B18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              // GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              FEST <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">FAQS</span>
            </h2>
            <p className="text-[#B8C7DC] text-sm">
              Everything you need to know about eligibility, passes, accommodation, and rules.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.slice(0, 6).map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-blue-500/25 bg-[#0D1630]/75 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-cyber font-bold text-sm sm:text-base text-white group-hover:text-blue-200 transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-[#050B18] text-blue-400 text-sm font-bold border border-blue-400/30 transition-transform ${openFaq === idx ? 'rotate-180 text-white' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#B8C7DC] leading-relaxed border-t border-blue-500/15 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          8. LOCATION & CONTACT
          ================================================== */}
      <section className="py-20 relative z-10 border-t border-blue-500/20 bg-[#0D1630]/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                // GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 font-cyber">
                CAMPUS <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">VENUE</span>
              </h2>
              <p className="text-[#B8C7DC] text-sm sm:text-base leading-relaxed mb-8">
                Tech Habba 2K26 is hosted at the sprawling 120-acre lush campus of Acharya Institute of Technology, Bangalore.
              </p>

              <div className="space-y-4 text-sm text-[#E5E7EB]">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#050B18]/80 border border-blue-500/20">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Acharya Institute of Technology, Soladevanahalli, Hesaraghatta Main Rd, Bengaluru, Karnataka 560107</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#050B18]/80 border border-blue-500/20">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>+91 98765 43210 / +91 98765 43211</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#050B18]/80 border border-blue-500/20">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>help@techhabba2k26.in</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-8 rounded-2xl bg-[#050B18]/90 border border-blue-500/30 shadow-[0_12px_40px_rgba(5,11,24,0.9)]">
              <h3 className="font-cyber font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-400" />
                SEND A QUERY
              </h3>
              {contactSubmitted ? (
                <div className="p-6 rounded-xl bg-blue-900/40 border border-blue-400 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-blue-300 mx-auto" />
                  <div className="font-bold text-white text-base">Query Dispatched!</div>
                  <div className="text-xs text-blue-200">Our team will respond to your registered email shortly.</div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#B8C7DC] mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1630] border border-blue-500/30 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="e.g. Aryan Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#B8C7DC] mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1630] border border-blue-500/30 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="e.g. aryan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#B8C7DC] mb-1">MESSAGE</label>
                    <textarea
                      required
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1630] border border-blue-500/30 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Ask about events, schedules, or passes..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:shadow-[0_6px_30px_rgba(96,165,250,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all text-sm tracking-wide"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeBluePreview;

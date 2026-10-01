import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight, Calendar, MapPin, Users, Cpu, Trophy, Zap, Code, Shield,
  Sparkles, Award, ArrowRight, CheckCircle2, HelpCircle, Send, ExternalLink,
  Terminal, Flame, Rocket, Star, Clock, Layers, Phone, Mail
} from 'lucide-react';
import { eventsData, eventCategories, faqList, scheduleData } from '../data/events';
import ParticleBackground from '../components/ParticleBackground';
import FloatingLogo from '../components/FloatingLogo';
import Hero3DTitle from '../components/Hero3DTitle';
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
          className="glass-card event-box-pop p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.06)] relative overflow-hidden group transition-all"
        >
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 rounded-full blur-sm group-hover:scale-150 transition-transform"></div>
          <span className="text-2xl sm:text-4xl md:text-5xl font-black font-cyber text-white">
            {item.val.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 mt-1 uppercase font-semibold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
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
    <div className="relative min-h-screen bg-black bg-workbench-gradient text-white overflow-x-hidden selection:bg-white selection:text-black">
      <ParticleBackground />

      {/* ==================================================
          1. HERO SECTION (Black & White 3D Atmosphere)
          ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Soft Monochromatic ambient light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* 3D Floating Material Logo & Header Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            {/* Counter-Reactive 3D Acharya Logo (Reacts & moves in opposite way as Big-O pops up/back) */}
            <AcharyaLogo size={80} />

            {/* HackerRing Inspired Precision Status Badge */}
            <div className="inline-flex max-w-full items-stretch border border-white/20 border-l-2 border-l-white bg-black/90 text-[11px] sm:text-xs font-bold tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[6px] overflow-hidden backdrop-blur-md">
              <span className="flex items-center border-r border-white/20 bg-white/10 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-[1px] bg-white animate-pulse" />
              </span>
              <span className="px-3 py-1.5 font-mono uppercase text-zinc-300">
                Acharya Institute of Technology // 12 - 14 NOV 2026
              </span>
            </div>
          </motion.div>

          {/* Clean, Seamless 3D Extruded Title (Zero Boxes, Pure Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Hero3DTitle line1="TECH HABBA" line2="2K26" className="mb-4" />
          </motion.div>

          {/* Statement & Subtitle (Clean Cyberpunk Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <div className="font-mono text-sm sm:text-lg md:text-xl tracking-[0.22em] uppercase text-zinc-300 select-none">
              <span className="opacity-40">// </span>
              <span className="text-white font-bold">WHERE TECHNOLOGY MEETS TALENT</span>
              <span className="opacity-40"> //</span>
            </div>
          </motion.div>

          {/* Additional statement text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 font-mono text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            An inter-collegiate national technical fest celebrating innovation, coding, creativity, competition and technology. Accelerate your skills across 13 championship tracks.
          </motion.p>

          {/* Clean SaaS Style High-Contrast Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3.5 mb-12"
          >
            <Link to="/register" className="btn-primary w-full sm:w-auto text-center gap-2 font-bold shadow-xl">
              <span>Get Registered Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/events" className="btn-outline w-full sm:w-auto text-center gap-2 font-medium">
              <span className="text-xs">▷</span>
              <span>Explore All Events</span>
            </Link>
          </motion.div>

          {/* ==================================================
              2. COUNTDOWN TIMER
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase mb-2">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span>TECH HABBA 2K26 STARTS IN</span>
            </div>
            <Countdown />
          </motion.div>

        </div>
      </section>

      {/* ==================================================
          3. ABOUT TECH HABBA SECTION
          ================================================== */}
      <section id="about" className="py-24 relative z-10 border-t border-white/10 bg-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              // DISCOVER THE LEGACY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 font-cyber">
              ABOUT <span className="neon-text">TECH HABBA 2K26</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              "Tech Habba 2K26 is a technical celebration that brings together students from different colleges to compete, collaborate, innovate and showcase their technical and creative skills."
            </p>
          </div>

          {/* 5 Core Feature Cards (Interactive Pop-Up & Border Shining Links on Touch/Hover) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Card 1: Technology */}
            <motion.div
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="event-box-pop glass-card p-6 rounded-2xl border border-white/15 border-t-2 border-t-white flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-black/85 hover:bg-black/95 hover:border-white/60 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.22)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=TECHNICAL" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/30 flex items-center justify-center text-white mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Cpu className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-white tracking-wide">
                    TECHNOLOGY
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    Deep-dive into Agentic AI, Cyber Defense, Decentralized Protocols, and Next-Gen Architectures.
                  </p>
                </div>

                {/* Border-Shining Link Pill on Touch & Hover */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-black/90 border border-white/20 group-hover:border-white/80 group-active:border-white text-[11px] font-mono font-bold tracking-wider text-zinc-300 group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-active:bg-white transition-colors animate-pulse" />
                      01 // TECH
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
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
              className="event-box-pop glass-card p-6 rounded-2xl border border-white/15 border-t-2 border-t-white flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-black/85 hover:bg-black/95 hover:border-white/60 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.22)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=HACKATHON" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/30 flex items-center justify-center text-white mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Rocket className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-white tracking-wide">
                    INNOVATION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    Transform revolutionary concepts into deployable 24-hour prototypes and startup pitches.
                  </p>
                </div>

                {/* Border-Shining Link Pill on Touch & Hover */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-black/90 border border-white/20 group-hover:border-white/80 group-active:border-white text-[11px] font-mono font-bold tracking-wider text-zinc-300 group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-active:bg-white transition-colors animate-pulse" />
                      02 // INNV
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
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
              className="event-box-pop glass-card p-6 rounded-2xl border border-white/15 border-t-2 border-t-white flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-black/85 hover:bg-black/95 hover:border-white/60 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.22)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=CODING" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/30 flex items-center justify-center text-white mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Trophy className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-white tracking-wide">
                    COMPETITION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    Clash against 500+ top colleges across algorithmic CP, CTF hacking, and Valorant LAN battles.
                  </p>
                </div>

                {/* Border-Shining Link Pill on Touch & Hover */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-black/90 border border-white/20 group-hover:border-white/80 group-active:border-white text-[11px] font-mono font-bold tracking-wider text-zinc-300 group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-active:bg-white transition-colors animate-pulse" />
                      03 // COMP
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
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
              className="event-box-pop glass-card p-6 rounded-2xl border border-white/15 border-t-2 border-t-white flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-black/85 hover:bg-black/95 hover:border-white/60 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.22)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=CREATIVE" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/30 flex items-center justify-center text-white mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Sparkles className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-white tracking-wide">
                    CREATIVITY
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    Design cyberpunk UI identities, debate future tech ethics, and conquer cryptic campus quests.
                  </p>
                </div>

                {/* Border-Shining Link Pill on Touch & Hover */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-black/90 border border-white/20 group-hover:border-white/80 group-active:border-white text-[11px] font-mono font-bold tracking-wider text-zinc-300 group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-active:bg-white transition-colors animate-pulse" />
                      04 // CREA
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
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
              className="event-box-pop glass-card p-6 rounded-2xl border border-white/15 border-t-2 border-t-white flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none bg-black/85 hover:bg-black/95 hover:border-white/60 hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,255,255,0.22)] active:scale-[1.03] active:-translate-y-3"
            >
              <Link to="/events?category=FUN%20%2F%20MANAGEMENT" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-white/30 flex items-center justify-center text-white mb-4 group-hover:scale-115 group-active:scale-115 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.45)] transition-all duration-300">
                    <Users className="w-6 h-6 group-hover:text-white" />
                  </div>
                  <h3 className="font-cyber font-bold text-lg text-white mb-2 group-hover:text-white tracking-wide">
                    COLLABORATION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    Form inter-college squads, network with venture capital leaders, and build lifelong bonds.
                  </p>
                </div>

                {/* Border-Shining Link Pill on Touch & Hover */}
                <div className="mt-5 relative overflow-hidden rounded-xl p-[1px] transition-all duration-300">
                  <div className="absolute inset-[-150%] animate-[borderBeamRotate_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[linkShineSweep_1.6s_ease-in-out_infinite] group-active:animate-[linkShineSweep_1.6s_ease-in-out_infinite] pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-black/90 border border-white/20 group-hover:border-white/80 group-active:border-white text-[11px] font-mono font-bold tracking-wider text-zinc-300 group-hover:text-white group-active:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white group-active:bg-white transition-colors animate-pulse" />
                      05 // COLL
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200">
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
          4. EVENT CATEGORIES BROWSE
          ================================================== */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                // EXPLORE DOMAINS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-cyber">
                EVENT <span className="neon-text">CATEGORIES</span>
              </h2>
            </div>
            <Link to="/events" className="text-sm font-semibold text-white hover:underline flex items-center gap-1 mt-4 md:mt-0">
              <span>View All 13 Events in Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'CODING', icon: Code, count: 'CP', desc: 'Speed coding & Algorithms' },
              { name: 'HACKATHON', icon: Terminal, count: '24 Hours', desc: 'The Big Hack Flagship' },
              { name: 'TECHNICAL', icon: Cpu, count: 'CTF, P2P, AI', desc: 'Agentic AI & Cyber Sec' },
              { name: 'GAMING', icon: Flame, count: 'Valorant, FF', desc: 'eSports LAN Tournaments' },
              { name: 'QUIZ', icon: HelpCircle, count: 'IT Quiz', desc: 'Tech Intellect Battle' },
              { name: 'CREATIVE', icon: Sparkles, count: 'Design & Ideathon', desc: 'UI Design & Pitching' },
              { name: 'FUN / MANAGEMENT', icon: Trophy, count: 'Chess, Hunt', desc: 'Campus Quest & Strategy' },
              { name: 'WORKSHOPS', icon: Rocket, count: 'AI Masterclass', desc: 'Industry Led Hands-on' },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  onClick={() => navigate(`/events?category=${cat.name === 'WORKSHOPS' ? 'TECHNICAL' : cat.name}`)}
                  className="glass-card event-box-pop p-5 rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 group shadow-lg"
                >
                  <Icon className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-cyber font-bold text-sm text-white mb-1">{cat.name}</h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-1">{cat.desc}</p>
                  <span className="inline-block mt-3 text-[10px] font-mono text-white font-bold px-2 py-0.5 rounded bg-zinc-900 border border-white/20">
                    {cat.count}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. FEATURED EVENTS SECTION
          ================================================== */}
      <section className="py-20 relative z-10 bg-black/75 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              // HIGH STAKES ARENA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              FEATURED <span className="neon-text">FLAGSHIPS</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              The grandest challenges offering massive prize pools, industry recognition, and maximum prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="glass-card event-box-pop rounded-2xl overflow-hidden border border-white/15 flex flex-col group transition-all duration-300"
              >
                {/* Poster */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black text-white border border-white/30">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-mono text-white font-bold flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-white" />
                      {event.prizePool.split('+')[0]}
                    </span>
                    <span className="text-[11px] text-zinc-300 font-mono bg-black/80 px-2 py-0.5 rounded border border-white/10">
                      Fee: ₹{event.fee}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-cyber font-bold text-base text-white group-hover:text-zinc-200 transition-colors line-clamp-1 mb-2">
                      {event.name}
                    </h3>
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-zinc-300 mb-5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{event.date} • {event.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    <Link
                      to={`/events/${event.id}`}
                      className="btn-outline !py-2 !px-2 text-center text-xs"
                    >
                      DETAILS
                    </Link>
                    <Link
                      to={`/register?event=${event.id}`}
                      className="btn-primary !py-2 !px-2 text-center text-xs"
                    >
                      REGISTER
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. ALL EVENTS PREVIEW & TABS
          ================================================== */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                // FULL BATTLEFIELD
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-cyber">
                ALL <span className="neon-text">13 EVENTS</span>
              </h2>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0">
              {['ALL', 'TECHNICAL', 'CODING', 'GAMING', 'CREATIVE'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === cat
                      ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {previewEvents.map((event) => (
              <div
                key={event.id}
                className="glass-card event-box-pop p-5 rounded-2xl border border-white/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-white border border-white/20">
                      {event.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      Prize: {event.prizePool.split('+')[0]}
                    </span>
                  </div>

                  <h3 className="font-cyber font-bold text-base text-white group-hover:text-zinc-300 transition-colors mb-2">
                    {event.name}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-zinc-400 font-mono mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-white font-mono">₹{event.fee} / team</span>
                  <div className="flex gap-2">
                    <Link to={`/events/${event.id}`} className="text-xs font-semibold text-zinc-400 hover:text-white px-2 py-1">
                      Rules
                    </Link>
                    <Link to={`/register?event=${event.id}`} className="btn-primary !py-1.5 !px-3 text-xs">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events" className="btn-outline text-sm gap-2">
              <span>EXPLORE ALL 13 EVENTS IN FULL DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================
          7. WHY PARTICIPATE SECTION
          ================================================== */}
      <section className="py-20 relative z-10 bg-black/75 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              // GLORY & REWARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              WHY <span className="neon-text">PARTICIPATE?</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              Level up your engineering career, secure cash rewards, and showcase your prowess on a national stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
              <Award className="w-10 h-10 text-white mb-4" />
              <h3 className="font-cyber font-bold text-lg text-white mb-2">₹1,50,000+ Prize Pool</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Direct cash prizes, trophies, premium mechanical keyboards, gaming gear, and cloud credits for top teams.
              </p>
            </div>

            <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
              <CheckCircle2 className="w-10 h-10 text-white mb-4" />
              <h3 className="font-cyber font-bold text-lg text-white mb-2">National Verification</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All participants receive tamper-proof, QR-verifiable digital certificates endorsed by Acharya Institute of Technology.
              </p>
            </div>

            <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
              <Users className="w-10 h-10 text-white mb-4" />
              <h3 className="font-cyber font-bold text-lg text-white mb-2">VC & Angel Mentorship</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pitch your Ideathon and Hackathon solutions directly to seasoned startup founders and venture investors.
              </p>
            </div>

            <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
              <Sparkles className="w-10 h-10 text-white mb-4" />
              <h3 className="font-cyber font-bold text-lg text-white mb-2">3D Arena Experience</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Experience high-octane LAN arenas, monochromatic 3D stage effects, pro commentary, and DJ concerts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          8. SCHEDULE PREVIEW SECTION
          ================================================== */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                // 3 DAYS OF INTENSE ACTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-cyber">
                SCHEDULE <span className="neon-text">PREVIEW</span>
              </h2>
            </div>
            <Link to="/schedule" className="btn-outline !py-2 text-xs mt-4 md:mt-0">
              VIEW FULL 3-DAY TIMELINE
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {scheduleData.map((day) => (
              <div key={day.day} className="glass-card event-box-pop p-6 rounded-2xl border border-white/10 flex flex-col">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="font-cyber font-black text-xl text-white">{day.day}</span>
                    <p className="text-xs text-zinc-400 font-mono">{day.date}</p>
                  </div>
                  <span className="text-xs bg-zinc-900 text-white px-2.5 py-1 rounded-full border border-white/20">
                    {day.events.length} Tracks
                  </span>
                </div>

                <div className="space-y-3 flex-grow">
                  {day.events.slice(0, 3).map((item) => (
                    <div key={item.id} className="p-3 rounded-xl bg-zinc-950 border border-white/5 hover:border-white/30 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white line-clamp-1">{item.name}</span>
                        <span className="text-[10px] font-mono text-zinc-300">{item.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-zinc-400">
                        <span>{item.venue}</span>
                        <span className="text-[10px] text-zinc-500 font-mono">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/schedule"
                  className="mt-4 pt-3 border-t border-white/5 text-center text-xs font-bold text-white hover:underline flex items-center justify-center gap-1"
                >
                  <span>See all {day.day} events</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          9. PRIZES / HIGHLIGHTS SECTION
          ================================================== */}
      <section className="py-20 relative z-10 bg-black/75 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/20 relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
                  // NATIONAL FEST HIGHLIGHTS
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 font-cyber">
                  FEST METRICS & <span className="neon-text">PRIZES</span>
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base mb-8 leading-relaxed">
                  Tech Habba 2K26 stands as one of the largest collegiate technical symposiums in South India, hosting students from premier universities and technology institutes.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/15 event-box-pop">
                    <span className="text-3xl font-black font-cyber text-white block">₹1,50,000+</span>
                    <span className="text-xs text-zinc-400 uppercase font-mono">Cash Prize Pool</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/15 event-box-pop">
                    <span className="text-3xl font-black font-cyber text-white block">5,000+</span>
                    <span className="text-xs text-zinc-400 uppercase font-mono">Expected Participants</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/15 event-box-pop">
                    <span className="text-3xl font-black font-cyber text-white block">50+</span>
                    <span className="text-xs text-zinc-400 uppercase font-mono">Colleges & Universities</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/15 event-box-pop">
                    <span className="text-3xl font-black font-cyber text-white block">13</span>
                    <span className="text-xs text-zinc-400 uppercase font-mono">Championship Contests</span>
                  </div>
                </div>
              </div>

              {/* Highlight Perks */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-start gap-4 event-box-pop">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">24-Hour Hackathon Arena</h4>
                    <p className="text-xs text-zinc-400">High-speed WiFi, dedicated rest pods, continuous food, caffeine bar, and mentor checkpoints.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-start gap-4 event-box-pop">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Pro LAN Gaming Arena</h4>
                    <p className="text-xs text-zinc-400">Low-ping private server setup, 165Hz gaming monitors, RTX GPUs, and live stage caster streaming.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-start gap-4 event-box-pop">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Accommodation for Outstation Teams</h4>
                    <p className="text-xs text-zinc-400">Secure on-campus hostel stay with breakfast & dinner available at ₹450 per person per day.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          10. REGISTRATION CTA SECTION
          ================================================== */}
      <section className="py-24 relative z-10 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="glass-card p-10 sm:p-14 rounded-3xl border border-white/30 relative shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.6)]">
              <Rocket className="w-8 h-8 text-black" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              READY TO CLAIM YOUR <span className="neon-text">VICTORY?</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Secure your spot in Tech Habba 2K26 before registrations close. Instant digital verification and unique registration QR codes generated immediately upon payment.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="btn-primary !py-4 !px-8 text-sm font-cyber">
                START REGISTRATION NOW
              </Link>
              <Link to="/accommodation" className="btn-outline !py-4 !px-8 text-sm font-cyber">
                BOOK ACCOMMODATION (₹450/day)
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          11. FAQ SECTION
          ================================================== */}
      <section id="faq" className="py-20 relative z-10 bg-black/75 backdrop-blur-md border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              // GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              FREQUENTLY ASKED <span className="neon-text">QUESTIONS</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              Everything you need to know about eligibility, registration, team sizes, rules, and accommodation.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`glass-card event-box-pop rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-white/50 bg-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.08)]' : 'border-white/10'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-sm sm:text-base text-zinc-200 flex items-center gap-3">
                      <span className="text-white font-mono text-xs">Q{index + 1}.</span>
                      {faq.q}
                    </span>
                    <span className={`text-white text-xl font-mono transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/10"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          12. CONTACT SECTION
          ================================================== */}
      <section id="contact" className="py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2 block">
              // CONNECT WITH US
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 font-cyber">
              CONTACT <span className="neon-text">ORGANIZERS</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              Reach out to our faculty heads and student coordinators for sponsorship, queries, or emergency help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left Info: Coordinators & Venue */}
            <div className="space-y-6">

              {/* Faculty Coordinator Card */}
              <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
                <span className="text-[11px] font-mono text-zinc-300 font-bold uppercase block mb-1">Chief Faculty Convener</span>
                <h3 className="text-xl font-bold text-white mb-1">Dr. Rajagopal K. & Prof. Ananya Sharma</h3>
                <p className="text-xs text-zinc-400 mb-3">Department of Computer Science & Engineering, AIT</p>
                <div className="flex flex-wrap gap-4 text-xs text-zinc-300">
                  <span className="flex items-center gap-1.5 font-mono"><Phone className="w-3.5 h-3.5 text-white" /> +91 98765 43210</span>
                  <span className="flex items-center gap-1.5 font-mono"><Mail className="w-3.5 h-3.5 text-white" /> convener@techhabba2k26.in</span>
                </div>
              </div>

              {/* Student Coordinators Card */}
              <div className="glass-card event-box-pop p-6 rounded-2xl border-l-4 border-l-white">
                <span className="text-[11px] font-mono text-zinc-300 font-bold uppercase block mb-1">Student Lead Coordinators</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div>
                    <h4 className="font-bold text-white text-sm">Aryan Sharma (President)</h4>
                    <p className="text-xs text-zinc-400 font-mono">+91 98765 12345</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Pooja Hegde (Vice President)</h4>
                    <p className="text-xs text-zinc-400 font-mono">+91 98765 12346</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Karthik Rao (Technical Lead)</h4>
                    <p className="text-xs text-zinc-400 font-mono">+91 98765 12347</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Deepak S (Hospitality & Stalls)</h4>
                    <p className="text-xs text-zinc-400 font-mono">+91 98765 12348</p>
                  </div>
                </div>
              </div>

              {/* Map & Address Simulation */}
              <div className="glass-card event-box-pop p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Acharya Institute of Technology, Soladevanahalli, Hesaraghatta Main Rd, Bengaluru, Karnataka 560107</span>
                </div>

                {/* Visual Map Mock */}
                <div className="w-full h-36 rounded-xl bg-zinc-950 border border-white/15 relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-white mx-auto animate-bounce" />
                    <span className="text-xs font-cyber font-bold text-white block mt-1">ACHARYA CAMPUS • 120 ACRES</span>
                    <a
                      href="https://maps.google.com/?q=Acharya+Institute+of+Technology+Bengaluru"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white hover:underline mt-1 font-bold"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="glass-card event-box-pop p-8 rounded-2xl border border-white/15">
              <h3 className="font-cyber font-bold text-xl text-white mb-2">Send us a Message</h3>
              <p className="text-xs text-zinc-400 mb-6">Have specific queries about events, sponsors or accommodations? Drop a message.</p>

              {contactSubmitted ? (
                <div className="p-6 rounded-xl bg-zinc-900 border border-white/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                  <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-zinc-300">Our student coordinators will get back to you via email/phone shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-300 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 block mb-1">Your Message / Query *</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Write your question about rules, events or registrations..."
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-xs tracking-wider font-bold gap-2 font-cyber"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
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

export default Home;

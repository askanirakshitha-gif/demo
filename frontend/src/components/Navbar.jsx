import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, User, LogOut, Sparkles, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import FloatingLogo from './FloatingLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'ACCOMMODATION', path: '/accommodation' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.substring(2));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.substring(2));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3'
          : 'bg-transparent py-5 border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with 3D Monochromatic emblem matching screenshot */}
          <Link to="/" className="flex items-center space-x-3 group">
            <FloatingLogo size={34} />
            <div className="flex flex-col">
              <span className="font-cyber font-black tracking-wider text-lg sm:text-xl text-white flex items-center gap-2">
                <span>TECH HABBA</span>
                <span className="font-mono text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded border border-white/70 bg-white/10 text-white font-bold tracking-normal">
                  2.0
                </span>
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-zinc-400 font-semibold font-mono">
                ACHARYA INSTITUTE OF TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs uppercase tracking-widest font-bold transition-all relative py-1 hover:text-white ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_#ffffff]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-200 border border-white/30 hover:bg-zinc-800 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              >
                <Shield className="w-3.5 h-3.5 text-white" />
                Admin Hub
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white border border-white/20 hover:border-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <User className="w-3.5 h-3.5 text-zinc-300" />
                  <span>{user.name.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn-primary !py-2 !px-5 text-xs shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  REGISTER NOW
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu matching screenshot */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all shadow-sm focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white stroke-[2.2]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-out Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#000000]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm uppercase tracking-widest font-semibold text-zinc-200 hover:text-white transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-zinc-500 font-mono">/&gt;</span>
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-lg text-center font-bold text-sm bg-zinc-900 text-white border border-white/20 flex items-center justify-center gap-2"
                    >
                      <User className="w-4 h-4 text-zinc-300" />
                      Student Dashboard ({user.name})
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 rounded-lg text-center font-bold text-sm bg-zinc-800 text-white border border-white/30 flex items-center justify-center gap-2"
                      >
                        <Shield className="w-4 h-4 text-white" />
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-zinc-400 bg-zinc-950 border border-white/10"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="btn-outline w-full text-center text-xs py-3"
                    >
                      SIGN IN / LOGIN
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full text-center text-xs py-3 font-cyber"
                    >
                      REGISTER FOR EVENTS
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

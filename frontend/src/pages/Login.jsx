import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, Lock, Mail, Phone, Shield, ArrowRight, 
  CheckCircle2, Sparkles, Building, Hash 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ParticleBackground from '../components/ParticleBackground';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [tab, setTab] = useState('signin'); // 'signin' | 'register' | 'forgot'
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  // Form states
  const [email, setEmail] = useState('aryan.sharma@example.com');
  const [password, setPassword] = useState('password123');
  const [phone, setPhone] = useState('+91 98765 12345');
  const [name, setName] = useState('Aryan Sharma');
  const [college, setCollege] = useState('Acharya Institute of Technology');
  const [usn, setUsn] = useState('1AY22CS045');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    login(
      {
        name: isAdminLogin ? 'Fest Chief Admin' : name || 'Student Participant',
        email: email,
        phone: phone,
        college: college,
        usn: usn,
        role: isAdminLogin ? 'ADMIN' : 'STUDENT',
      },
      isAdminLogin
    );

    if (isAdminLogin) {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    login(
      {
        name,
        email,
        phone,
        college,
        usn,
        role: 'STUDENT',
      },
      false
    );
    navigate('/dashboard');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setForgotSubmitted(true);
    setTimeout(() => {
      setForgotSubmitted(false);
      setTab('signin');
    }, 3000);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 flex items-center justify-center">
      <ParticleBackground />

      <div className="w-full max-w-md mx-auto px-4 relative z-10">
        
        {/* Card Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-pink-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-dark-900 rounded flex items-center justify-center font-cyber font-bold text-neon-cyan text-xs">
                TH
              </div>
            </div>
            <span className="font-cyber font-black tracking-wider text-xl text-white">
              TECH <span className="neon-text">HABBA</span> 2K26
            </span>
          </Link>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-cyber">
            {tab === 'signin' && (isAdminLogin ? 'ADMIN PORTAL' : 'STUDENT SIGN IN')}
            {tab === 'register' && 'CREATE ACCOUNT'}
            {tab === 'forgot' && 'RESET PASSWORD'}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            {tab === 'signin' && 'Access your event registrations, tickets, and payment receipts.'}
            {tab === 'register' && 'Create your fest student profile to register for 13 championships.'}
            {tab === 'forgot' && 'Enter your registered email to receive password reset instructions.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-dark-900/90 p-1 rounded-xl border border-white/10 mb-6 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab('signin')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'signin' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'register' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {/* Form Container */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/40 shadow-[0_0_40px_rgba(121,40,202,0.25)]">
          
          {tab === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-xl text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-gray-300">Password</label>
                  <button
                    type="button"
                    onClick={() => setTab('forgot')}
                    className="text-[11px] text-pink-400 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-xl text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Admin Toggle Option */}
              <div className="pt-1 flex items-center justify-between text-xs text-gray-400">
                <label className="flex items-center gap-2 cursor-pointer hover:text-white">
                  <input
                    type="checkbox"
                    checked={isAdminLogin}
                    onChange={(e) => setIsAdminLogin(e.target.checked)}
                    className="rounded border-purple-900 bg-dark-900 text-pink-500 focus:ring-pink-500"
                  />
                  <span className="flex items-center gap-1 text-purple-300 font-mono">
                    <Shield className="w-3.5 h-3.5 text-purple-400" /> Sign in as Admin
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full !py-3 text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,2,238,0.5)]"
              >
                <span>{isAdminLogin ? 'SIGN IN TO ADMIN HUB' : 'SIGN IN TO DASHBOARD'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-3 rounded-xl bg-dark-900/90 border border-white/5 text-[11px] text-gray-400 text-center font-mono">
                <span>Demo Student Auto-Filled. Click Sign In to test!</span>
              </div>
            </form>
          )}

          {tab === 'register' && (
            <form onSubmit={handleCreateAccount} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Student Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aryan Sharma"
                    className="w-full pl-10 pr-4 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aryan@example.com"
                    className="w-full pl-10 pr-4 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">College *</label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="AIT Bengaluru"
                    className="w-full px-3 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">USN / Roll *</label>
                  <input
                    type="text"
                    required
                    value={usn}
                    onChange={(e) => setUsn(e.target.value)}
                    placeholder="1AY22CS045"
                    className="w-full px-3 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-xs text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full !py-3 text-xs font-bold mt-2"
              >
                CREATE STUDENT ACCOUNT
              </button>
            </form>
          )}

          {tab === 'forgot' && (
            <div className="space-y-4">
              {forgotSubmitted ? (
                <div className="p-6 rounded-2xl bg-green-950/40 border border-green-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                  <h4 className="font-bold text-white text-sm">Reset Link Dispatched</h4>
                  <p className="text-xs text-gray-300">Check your inbox for password reset instructions.</p>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Enter Registered Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-xl text-sm text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-3 text-xs font-bold"
                  >
                    SEND RESET LINK
                  </button>

                  <button
                    type="button"
                    onClick={() => setTab('signin')}
                    className="w-full text-center text-xs text-gray-400 hover:text-white"
                  >
                    Back to Sign In
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Login;

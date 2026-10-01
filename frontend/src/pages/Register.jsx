import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  User, Mail, Phone, Building, Hash, BookOpen, Layers, Plus, Trash2, 
  CreditCard, ShieldCheck, Sparkles, CheckCircle, Info, ArrowRight 
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import { useAuth } from '../context/AuthContext';
import RazorpayModal from '../components/RazorpayModal';
import ParticleBackground from '../components/ParticleBackground';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { allEvents, addRegistration } = useRegistrations();
  const { user } = useAuth();

  const preselectedEventId = searchParams.get('event') || allEvents[0]?.id || 'the-big-hack';
  const [selectedEventId, setSelectedEventId] = useState(preselectedEventId);

  // Student Details
  const [formData, setFormData] = useState({
    studentName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    college: user?.college || 'Acharya Institute of Technology',
    usn: user?.usn || '',
    branch: user?.branch || 'Computer Science & Engineering',
    year: user?.year || '3rd Year / 6th Sem',
    gender: 'Male',
    teamName: '',
  });

  // Dynamic Team Members
  const [teamMembers, setTeamMembers] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [errors, setErrors] = useState({});

  const selectedEvent = allEvents.find((e) => e.id === selectedEventId) || allEvents[0];
  const isTeamEvent = selectedEvent?.minTeamSize > 1 || selectedEvent?.maxTeamSize > 1;
  const maxAdditionalMembers = (selectedEvent?.maxTeamSize || 1) - 1;

  useEffect(() => {
    if (searchParams.get('event')) {
      setSelectedEventId(searchParams.get('event'));
    }
  }, [searchParams]);

  useEffect(() => {
    // Reset team members if event changes to individual
    if (!isTeamEvent) {
      setTeamMembers([]);
    } else if (teamMembers.length > maxAdditionalMembers) {
      setTeamMembers(teamMembers.slice(0, maxAdditionalMembers));
    }
  }, [selectedEventId, isTeamEvent, maxAdditionalMembers]);

  const handleAddTeamMember = () => {
    if (teamMembers.length < maxAdditionalMembers) {
      setTeamMembers([
        ...teamMembers,
        { name: '', email: '', phone: '', college: formData.college, usn: '' }
      ]);
    }
  };

  const handleRemoveTeamMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

  const handleMemberChange = (index, field, val) => {
    const updated = [...teamMembers];
    updated[index][field] = val;
    setTeamMembers(updated);
  };

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    if (!formData.college.trim()) errs.college = 'College is required';
    if (!formData.usn.trim()) errs.usn = 'USN is required';
    if (isTeamEvent && !formData.teamName.trim()) {
      errs.teamName = 'Team name is required for team events';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId) => {
    setShowPaymentModal(false);
    
    // Create new registration record
    const newReg = addRegistration({
      eventId: selectedEvent.id,
      eventName: selectedEvent.name,
      studentName: formData.studentName,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      usn: formData.usn,
      branch: formData.branch,
      year: formData.year,
      gender: formData.gender,
      teamName: isTeamEvent ? formData.teamName : '',
      teamMembers: isTeamEvent ? teamMembers : [],
      amount: selectedEvent.fee,
      paymentStatus: 'PAYMENT VERIFIED',
      registrationStatus: 'REGISTRATION CONFIRMED',
      paymentId: paymentId,
      date: selectedEvent.date,
      venue: selectedEvent.venue
    });

    navigate(`/confirmation/${newReg.registrationId}`);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            // OFFICIAL EVENT REGISTRATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
            REGISTER FOR <span className="neon-text">TECH HABBA 2K26</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Fill in your participant and team credentials to generate your official festival entry badge and access code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Event Selection Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30">
            <h3 className="font-cyber font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Step 1: Select Event
            </h3>

            <div className="space-y-4">
              <label className="text-xs font-semibold text-gray-300 block">Choose Championship / Contest *</label>
              <select
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="w-full px-4 py-3 bg-dark-900 border border-purple-900/60 rounded-xl text-white font-medium focus:outline-none focus:border-pink-500 text-sm"
              >
                {allEvents.map((evt) => (
                  <option key={evt.id} value={evt.id} className="bg-dark-900 text-white">
                    {evt.name} ({evt.category}) — ₹{evt.fee} [{evt.teamSize}]
                  </option>
                ))}
              </select>

              {/* Selected Event Preview Badge */}
              {selectedEvent && (
                <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <div>
                    <span className="text-pink-400 font-bold block sm:inline">{selectedEvent.name}</span>
                    <span className="text-gray-400 sm:ml-2">({selectedEvent.date} • {selectedEvent.venue})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">Team: {selectedEvent.teamSize}</span>
                    <span className="px-2 py-1 bg-pink-950/60 text-pink-400 rounded border border-pink-500/30 font-bold">
                      Fee: ₹{selectedEvent.fee}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. Primary Participant / Team Leader Details */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30">
            <h3 className="font-cyber font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              Step 2: Participant / Team Leader Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Full Student Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                {errors.studentName && <span className="text-[11px] text-red-400 mt-1 block">{errors.studentName}</span>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Email Address (For Confirmation & QR) *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aryan.sharma@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Phone Number (WhatsApp) *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">College Name *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. Acharya Institute of Technology"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                {errors.college && <span className="text-[11px] text-red-400 mt-1 block">{errors.college}</span>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">USN / University Roll / Student ID *</label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.usn}
                    onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                    placeholder="e.g. 1AY22CS045"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-pink-500"
                  />
                </div>
                {errors.usn && <span className="text-[11px] text-red-400 mt-1 block">{errors.usn}</span>}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Branch / Department *</label>
                <input
                  type="text"
                  required
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  placeholder="e.g. Computer Science, ISE, ECE"
                  className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Year / Semester *</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                >
                  <option value="1st Year / 1st-2nd Sem">1st Year / 1st-2nd Sem</option>
                  <option value="2nd Year / 3rd-4th Sem">2nd Year / 3rd-4th Sem</option>
                  <option value="3rd Year / 5th-6th Sem">3rd Year / 5th-6th Sem</option>
                  <option value="4th Year / 7th-8th Sem">4th Year / 7th-8th Sem</option>
                  <option value="Postgraduate (MCA / M.Tech / MBA)">Postgraduate (MCA / M.Tech / MBA)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Gender (Optional)</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white focus:outline-none focus:border-pink-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. Team Details (Displayed ONLY for Team events) */}
          {isTeamEvent && (
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-cyber font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Step 3: Team Members
                  </h3>
                  <p className="text-xs text-gray-400">
                    Max squad size for this event is <span className="text-cyan-400 font-bold">{selectedEvent.maxTeamSize}</span> (Team Leader + {maxAdditionalMembers} members).
                  </p>
                </div>

                {teamMembers.length < maxAdditionalMembers && (
                  <button
                    type="button"
                    onClick={handleAddTeamMember}
                    className="btn-outline !py-1.5 !px-3 text-xs flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ ADD TEAM MEMBER ({teamMembers.length + 1}/{selectedEvent.maxTeamSize})</span>
                  </button>
                )}
              </div>

              {/* Team Name */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Team / Squad Name *</label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="e.g. CyberVanguard, Binary Assassins"
                  className="w-full px-4 py-2.5 bg-dark-900 border border-purple-900/50 rounded-lg text-sm text-white font-cyber focus:outline-none focus:border-pink-500"
                />
                {errors.teamName && <span className="text-[11px] text-red-400 mt-1 block">{errors.teamName}</span>}
              </div>

              {/* Dynamic Member Cards */}
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4 rounded-xl bg-dark-900/90 border border-white/5 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-pink-400 uppercase">
                      Team Member {index + 2}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTeamMember(index)}
                      className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-950/40 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-gray-400 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        placeholder="Member Name"
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={member.email}
                        onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                        placeholder="member@example.com"
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 block mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={member.phone}
                        onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 block mb-1">USN / Roll No</label>
                      <input
                        type="text"
                        required
                        value={member.usn}
                        onChange={(e) => handleMemberChange(index, 'usn', e.target.value)}
                        placeholder="USN"
                        className="w-full px-3 py-2 bg-[#0a0a14] border border-white/10 rounded-lg text-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {teamMembers.length < maxAdditionalMembers && (
                <button
                  type="button"
                  onClick={handleAddTeamMember}
                  className="w-full py-3 rounded-xl border border-dashed border-purple-500/40 text-purple-300 hover:bg-purple-950/30 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4 text-pink-400" />
                  <span>+ ADD ANOTHER TEAM MEMBER</span>
                </button>
              )}
            </div>
          )}

          {/* 4. Payment Checkout Summary */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-pink-500/40 bg-gradient-to-r from-[#141428] via-[#101020] to-[#141428]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="text-xs font-mono text-pink-400 uppercase tracking-wider block mb-1">TOTAL REGISTRATION FEE</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white font-mono">₹{selectedEvent?.fee || 200}</span>
                  <span className="text-xs text-gray-400 font-mono">Inclusive of all fest taxes & ID badge</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto !py-3.5 !px-8 text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(217,2,238,0.6)]"
              >
                <CreditCard className="w-4 h-4" />
                <span>PROCEED TO PAYMENT (₹{selectedEvent?.fee || 200})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Instant QR Pass Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Razorpay Encrypted Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>Verifiable National Certificate</span>
              </div>
            </div>
          </div>

        </form>

      </div>

      {/* Interactive Razorpay Gateway Simulation Modal */}
      <RazorpayModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={selectedEvent?.fee || 200}
        eventName={selectedEvent?.name || 'Fest Event'}
        studentName={formData.studentName}
        email={formData.email}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Register;

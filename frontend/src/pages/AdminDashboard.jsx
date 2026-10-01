import { useState } from 'react';
import { 
  Shield, Users, Trophy, DollarSign, Clock, 
  Search, Download, Plus, Edit, Trash2, CheckCircle2, 
  XCircle, Filter, Sparkles, RefreshCw, Layers 
} from 'lucide-react';
import { useRegistrations } from '../context/RegistrationContext';
import ParticleBackground from '../components/ParticleBackground';

const AdminDashboard = () => {
  const { 
    registrations, 
    allEvents, 
    updateRegistrationStatus, 
    addEvent, 
    updateEvent, 
    deleteEvent 
  } = useRegistrations();

  const [activeTab, setActiveTab] = useState('registrations'); // 'registrations' | 'events'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [selectedEventFilter, setSelectedEventFilter] = useState('ALL');

  // Event modal state
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    name: '',
    category: 'TECHNICAL',
    description: '',
    date: '12 Nov 2026',
    time: '10:00 AM - 01:00 PM',
    venue: 'Acharya Main Campus',
    teamSize: 'Individual',
    minTeamSize: 1,
    maxTeamSize: 1,
    fee: 200,
    prizePool: '₹10,000',
    coordinator: 'Prof. Coordinator',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  });

  // Calculate statistics
  const totalRegistrations = registrations.length;
  const totalParticipants = registrations.reduce(
    (acc, r) => acc + 1 + (r.teamMembers ? r.teamMembers.length : 0),
    0
  );
  const totalEvents = allEvents.length;
  const totalPayments = registrations
    .filter((r) => r.paymentStatus === 'PAYMENT VERIFIED')
    .reduce((acc, r) => acc + (r.amount || 0), 0);
  const pendingVerifications = registrations.filter(
    (r) => r.paymentStatus === 'PAYMENT PENDING'
  ).length;

  // Filter registrations
  const filteredRegistrations = registrations.filter((r) => {
    const matchesSearch =
      r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.registrationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.teamName && r.teamName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      r.usn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === 'ALL' || r.paymentStatus === selectedStatus;
    const matchesEvent =
      selectedEventFilter === 'ALL' || r.eventId === selectedEventFilter;
    return matchesSearch && matchesStatus && matchesEvent;
  });

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'Registration ID',
      'Event Name',
      'Student Name',
      'Email',
      'Phone',
      'College',
      'USN',
      'Team Name',
      'Members Count',
      'Amount',
      'Payment Status',
      'Registration Status',
      'Payment ID'
    ];

    const rows = filteredRegistrations.map((r) => [
      r.registrationId,
      `"${r.eventName}"`,
      `"${r.studentName}"`,
      r.email,
      r.phone,
      `"${r.college}"`,
      r.usn,
      `"${r.teamName || 'N/A'}"`,
      r.teamMembers ? r.teamMembers.length : 0,
      r.amount,
      r.paymentStatus,
      r.registrationStatus,
      r.paymentId || 'N/A'
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TechHabba2K26_Registrations_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenAddModal = () => {
    setEditingEvent(null);
    setEventForm({
      name: '',
      category: 'TECHNICAL',
      description: '',
      date: '12 Nov 2026',
      time: '10:00 AM - 01:00 PM',
      venue: 'Acharya Main Campus',
      teamSize: 'Individual',
      minTeamSize: 1,
      maxTeamSize: 1,
      fee: 200,
      prizePool: '₹10,000',
      coordinator: 'Prof. Coordinator',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    });
    setShowEventModal(true);
  };

  const handleOpenEditModal = (evt) => {
    setEditingEvent(evt);
    setEventForm(evt);
    setShowEventModal(true);
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    if (editingEvent) {
      updateEvent(editingEvent.id, eventForm);
    } else {
      addEvent(eventForm);
    }
    setShowEventModal(false);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/40 mb-10 bg-gradient-to-r from-[#18112e] via-[#100c1e] to-[#18112e]">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-950 border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(157,78,221,0.4)]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400 block">
                ORGANIZER & ADMIN CONSOLE
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-cyber">
                TECH HABBA 2K26 <span className="neon-text">ADMIN HUB</span>
              </h1>
              <p className="text-xs text-gray-400 font-mono">
                Acharya Institute of Technology • Live Database & Operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="btn-outline !py-2.5 !px-4 text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>EXPORT CSV</span>
            </button>
            <button
              onClick={handleOpenAddModal}
              className="btn-primary !py-2.5 !px-4 text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(217,2,238,0.5)]"
            >
              <Plus className="w-4 h-4" />
              <span>ADD EVENT</span>
            </button>
          </div>
        </div>

        {/* 5 Required Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          
          <div className="glass-card p-5 rounded-2xl border border-cyan-500/30">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">TOTAL PARTICIPANTS</span>
            <span className="text-3xl font-black text-neon-cyan font-mono">{totalParticipants}</span>
            <span className="text-[10px] text-cyan-400/80 block mt-1">Students Registered</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-pink-500/30">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">TOTAL REGISTRATIONS</span>
            <span className="text-3xl font-black text-neon-pink font-mono">{totalRegistrations}</span>
            <span className="text-[10px] text-pink-400/80 block mt-1">Teams & Individuals</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-purple-500/30">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">TOTAL EVENTS</span>
            <span className="text-3xl font-black text-purple-300 font-mono">{totalEvents}</span>
            <span className="text-[10px] text-purple-400/80 block mt-1">Championship Contests</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-green-500/30">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">PAYMENTS COLLECTED</span>
            <span className="text-3xl font-black text-green-400 font-mono">₹{totalPayments}</span>
            <span className="text-[10px] text-green-400/80 block mt-1">Via Razorpay Gateway</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-amber-500/30 col-span-2 md:col-span-1">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">PENDING VERIFICATIONS</span>
            <span className="text-3xl font-black text-amber-400 font-mono">{pendingVerifications}</span>
            <span className="text-[10px] text-amber-300/80 block mt-1">Awaiting Review</span>
          </div>

        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-purple-900/40 mb-6 gap-6 text-sm font-cyber">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`pb-3 border-b-2 transition-all font-bold ${
              activeTab === 'registrations' ? 'border-pink-500 text-pink-400' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Registrations Management ({filteredRegistrations.length})
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-3 border-b-2 transition-all font-bold ${
              activeTab === 'events' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Events Management ({allEvents.length})
          </button>
        </div>

        {/* ==================================================
            TAB 1: REGISTRATIONS MANAGEMENT
            ================================================== */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="glass-card p-4 rounded-2xl border border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student, USN, team, email, ID..."
                  className="w-full pl-9 pr-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-pink-500"
                >
                  <option value="ALL">All Payment Statuses</option>
                  <option value="PAYMENT VERIFIED">PAYMENT VERIFIED</option>
                  <option value="PAYMENT PENDING">PAYMENT PENDING</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>

              <div>
                <select
                  value={selectedEventFilter}
                  onChange={(e) => setSelectedEventFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-pink-500"
                >
                  <option value="ALL">All Events Filter</option>
                  {allEvents.map((evt) => (
                    <option key={evt.id} value={evt.id}>{evt.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Registrations Data Table */}
            <div className="glass-card rounded-2xl border border-purple-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-dark-900/90 border-b border-white/10 text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                      <th className="p-4">Reg ID</th>
                      <th className="p-4">Participant & College</th>
                      <th className="p-4">Event</th>
                      <th className="p-4">Team / Squad</th>
                      <th className="p-4">Fee</th>
                      <th className="p-4">Payment Status</th>
                      <th className="p-4 text-right">Verification Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs text-gray-200 font-mono">
                    {filteredRegistrations.map((reg) => (
                      <tr key={reg.registrationId} className="hover:bg-white/[0.02]">
                        <td className="p-4 text-neon-cyan font-bold">{reg.registrationId}</td>
                        <td className="p-4">
                          <div className="font-bold text-white font-sans text-sm">{reg.studentName}</div>
                          <div className="text-[11px] text-gray-400">{reg.college} • {reg.usn}</div>
                          <div className="text-[10px] text-gray-500">{reg.email} • {reg.phone}</div>
                        </td>
                        <td className="p-4 text-purple-300 font-semibold">{reg.eventName}</td>
                        <td className="p-4">
                          {reg.teamName ? (
                            <div>
                              <span className="text-pink-400 font-bold">{reg.teamName}</span>
                              <span className="text-[10px] text-gray-400 block">
                                +{reg.teamMembers?.length || 0} members
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-500">Solo</span>
                          )}
                        </td>
                        <td className="p-4 font-bold text-white">₹{reg.amount}</td>
                        <td className="p-4">
                          {reg.paymentStatus === 'PAYMENT VERIFIED' && (
                            <span className="px-2 py-0.5 rounded bg-green-950/80 text-green-400 border border-green-500/40 text-[10px]">
                              VERIFIED
                            </span>
                          )}
                          {reg.paymentStatus === 'PAYMENT PENDING' && (
                            <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[10px]">
                              PENDING
                            </span>
                          )}
                          {reg.paymentStatus === 'CANCELLED' && (
                            <span className="px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/40 text-[10px]">
                              CANCELLED
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {reg.paymentStatus !== 'PAYMENT VERIFIED' && (
                              <button
                                onClick={() =>
                                  updateRegistrationStatus(reg.registrationId, {
                                    paymentStatus: 'PAYMENT VERIFIED',
                                    registrationStatus: 'REGISTRATION CONFIRMED'
                                  })
                                }
                                className="px-2 py-1 rounded bg-green-950 text-green-300 border border-green-600/40 hover:bg-green-900 text-[10px]"
                                title="Approve & Verify"
                              >
                                Approve
                              </button>
                            )}
                            {reg.paymentStatus !== 'CANCELLED' && (
                              <button
                                onClick={() =>
                                  updateRegistrationStatus(reg.registrationId, {
                                    paymentStatus: 'CANCELLED',
                                    registrationStatus: 'CANCELLED'
                                  })
                                }
                                className="px-2 py-1 rounded bg-red-950 text-red-300 border border-red-600/40 hover:bg-red-900 text-[10px]"
                                title="Cancel Registration"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredRegistrations.length === 0 && (
                <div className="p-10 text-center text-gray-500">
                  <p>No student registrations match your filter.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ==================================================
            TAB 2: EVENTS MANAGEMENT
            ================================================== */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-cyan-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                        {evt.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        ₹{evt.fee} ({evt.teamSize})
                      </span>
                    </div>

                    <h3 className="font-cyber font-bold text-base text-white group-hover:text-cyan-300 mb-1">
                      {evt.name}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">{evt.description}</p>
                    
                    <div className="text-[11px] text-gray-400 font-mono space-y-1 mb-4">
                      <div>Date: <span className="text-white">{evt.date}</span></div>
                      <div>Venue: <span className="text-white">{evt.venue}</span></div>
                      <div>Coordinator: <span className="text-purple-300">{evt.coordinator}</span></div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-green-400 font-mono">
                      {registrations.filter(r => r.eventId === evt.id).length} Registrations
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenEditModal(evt)}
                        className="p-1.5 rounded-lg bg-dark-900 text-cyan-400 hover:bg-cyan-950/60 border border-cyan-500/30"
                        title="Edit Event"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete event "${evt.name}"?`)) {
                            deleteEvent(evt.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-dark-900 text-red-400 hover:bg-red-950/60 border border-red-500/30"
                        title="Delete Event"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add / Edit Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-dark-950 border border-purple-500/40 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="font-cyber font-bold text-xl text-white mb-4">
              {editingEvent ? 'Edit Fest Event' : 'Add New Event to TECH HABBA 2K26'}
            </h3>

            <form onSubmit={handleSaveEvent} className="space-y-4 text-xs">
              <div>
                <label className="text-gray-300 block mb-1">Event Name *</label>
                <input
                  type="text"
                  required
                  value={eventForm.name}
                  onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Category</label>
                  <select
                    value={eventForm.category}
                    onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                  >
                    <option value="TECHNICAL">TECHNICAL</option>
                    <option value="CODING">CODING</option>
                    <option value="HACKATHON">HACKATHON</option>
                    <option value="GAMING">GAMING</option>
                    <option value="QUIZ">QUIZ</option>
                    <option value="CREATIVE">CREATIVE</option>
                    <option value="FUN / MANAGEMENT">FUN / MANAGEMENT</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 block mb-1">Registration Fee (₹)</label>
                  <input
                    type="number"
                    required
                    value={eventForm.fee}
                    onChange={(e) => setEventForm({ ...eventForm, fee: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Team Size Label</label>
                  <input
                    type="text"
                    value={eventForm.teamSize}
                    onChange={(e) => setEventForm({ ...eventForm, teamSize: e.target.value })}
                    placeholder="e.g. Team of 2-4"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="text-gray-300 block mb-1">Prize Pool</label>
                  <input
                    type="text"
                    value={eventForm.prizePool}
                    onChange={(e) => setEventForm({ ...eventForm, prizePool: e.target.value })}
                    placeholder="e.g. ₹20,000"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Date</label>
                  <input
                    type="text"
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Venue</label>
                  <input
                    type="text"
                    value={eventForm.venue}
                    onChange={(e) => setEventForm({ ...eventForm, venue: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Coordinator Name & Contact</label>
                <input
                  type="text"
                  value={eventForm.coordinator}
                  onChange={(e) => setEventForm({ ...eventForm, coordinator: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Short Description</label>
                <textarea
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 rounded-lg bg-dark-800 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary !py-2 !px-5 text-xs"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
